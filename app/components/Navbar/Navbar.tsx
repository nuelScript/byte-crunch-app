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
            <button className="cart-icon" type="button">
              <AiOutlineShopping />
              <span className="cart-item-qty">1</span>
            </button>            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
