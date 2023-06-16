"use client";

import { placeholder } from "@/public/images";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div className="">
      {src ? (
        <Image
          className="rounded-full"
          height="30"
          width="30"
          alt="Avatar"
          src={src || placeholder}
        />
      ) : (
        <FaRegUserCircle size={25} />
      )}
    </div>
  );
};

export default Avatar;
