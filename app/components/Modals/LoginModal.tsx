"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal(); 
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            callbackUrl: '/home'
        })
        .then((callback) => {
            setIsLoading(false);

            if(callback?.ok) {
                toast.success("Logged in");
                router.refresh();
                loginModal.onClose();
            } 
            
            if(callback?.error) {
                toast.error(callback.error);
            }
        })
    };

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back" subtitle="Login to your account!" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
      <div className="mt-3 flex flex-col gap-4">
        <hr />
        <Button
          outline
          label="Continue with Google"
          icon={FcGoogle}
          onClick={() => signIn("google", { callbackUrl: "/home" })}
        />
        <div className="mt-4 text-center font-light text-neutral-500">
          <div className="flex flex-row items-center justify-center gap-2">
            <div>Don{"'"}t have an account?</div>
            <div
              onClick={toggle}
              className="cursor-pointer text-neutral-800 hover:underline"
            >
              Create an account
            </div>
          </div>
        </div>
      </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;
