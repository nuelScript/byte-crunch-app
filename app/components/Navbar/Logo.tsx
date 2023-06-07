"use client";

import { logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src={logo}
      />
    </Link>
  );
};

export default Logo;
