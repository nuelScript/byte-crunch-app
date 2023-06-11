"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import { AiOutlineShopping } from "react-icons/ai";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="sticky top-0 w-full bg-white z-10 shadow-sm">
      <div
        className="
        py-4
        border-b-[1px]"
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
            <button className="relative text-gray-500 text-2xl cursor-pointer transition-transform hover:scale-110 bg-transparent border-none" type="button">
              <AiOutlineShopping />
              <span className="absolute -right-2 -top-2 text-xs text-white bg-red-500 w-[18px] h-[18px] rounded-full text-center font-semibold">1</span>
            </button>            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
