"use client";

import Link from "next/link";

interface MenuItemProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  children,
  className,
  href,
}) => {
  return (
    <Link
      href={href || "#"}
      onClick={onClick}
      className={`
            w-full
            px-8
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
            ${className}
        `}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
