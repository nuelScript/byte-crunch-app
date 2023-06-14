"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import MenuItem from "./MenuItem";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { placeholder } from "@/public/images";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const bounding_div = useRef<HTMLDivElement>(null);
  const hamburger_div = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => {
    setIsDone(true);
  }, []);

  const handleClickOutside = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isOpen && bounding_div.current && hamburger_div.current && isDone) {
      const bounding_rect = bounding_div.current.getBoundingClientRect();

      const hamburder_rect = hamburger_div.current.getBoundingClientRect();
      const e = event.touches[0];
      // console.log(
      //   `Client Location: ${e.touches[0].clientX} ${e.touches[]}`,
      //   `Page Location: ${e.pageX} ${e.pageY}`,
      //   `Normal Location: ${e.x} ${e.y}`
      // );
      if (
        e.clientX < bounding_rect.left ||
        e.clientX > bounding_rect.right ||
        e.clientY < bounding_rect.top ||
        e.clientY > bounding_rect.bottom
      ) {
        console.log("help");
        setIsOpen(false);
      }
    }
  };

  return (
    <div
      ref={bounding_div}
      className="flex relative mx-4 flex-row items-center gap-10"
    >
      <div
        ref={hamburger_div}
        onClick={toggleOpen}
        className={
          //`p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition`
          "hover:cursor-pointer"
        }
      >
        {/* <AiOutlineMenu /> */}
        <Avatar src={currentUser?.image} />
        {/* <div className="hidden md:block">
        </div> */}
      </div>

      {isOpen && (
        <div
          className="
                    absolute
                    rounded-bl-xl
                    rounded-br-xl
                    shadow-md
                    bg-white
                    overflow-hidden
                    left-[-100%]
                    top-[110%]
                    text-sm
                    md:left-0
                "
        >
          <div
            onMouseLeave={toggleOpen}
            onTouchStart={(e) => {}}
            className="flex flex-col w-fit items-center cursor-pointer"
          >
            {currentUser ? (
              <>
                <MenuItem className="hidden md:block" href="/">
                  Profile
                </MenuItem>
                <MenuItem className="md:hidden block" onClick={() => {}}>
                  <Avatar src={currentUser?.image} />
                </MenuItem>
                <MenuItem href="/cart">Cart</MenuItem>
                <hr />
                <MenuItem onClick={() => signOut({callbackUrl: '/'})}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen}>Login</MenuItem>
                <MenuItem onClick={registerModal.onOpen}>Register</MenuItem>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
