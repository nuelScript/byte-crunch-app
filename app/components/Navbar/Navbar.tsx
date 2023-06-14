"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import { AiOutlineShopping } from "react-icons/ai";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback } from "react";
import Link from 'next/link';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();

  const onCart = useCallback(() => {
    if(!currentUser) {
      return loginModal.onOpen();
    }

    // Open Cart Page
  }, [currentUser,loginModal]);
  return (
    <div className="sticky top-0 z-10 w-full bg-white shadow-sm">
      <div
        className="
        border-b-[1px]
        py-4"
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
            <Link onClick={onCart} href={"/cart"}>
              <button
                className="relative cursor-pointer border-none bg-transparent text-2xl text-gray-500 transition-transform hover:scale-110"
                type="button"
              >
                <AiOutlineShopping />
                <span className="absolute -right-2 -top-2 h-[18px] w-[18px] rounded-full bg-red-500 text-center text-xs font-semibold text-white">
                  1
                </span>
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
