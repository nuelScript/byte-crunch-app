"use client";
import React, { RefObject } from "react";
interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  ref?: RefObject<HTMLDivElement>;
}

const Container: React.FC<ContainerProps> = ({ children, className, ref }) => {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-2 md:px-10 xl:px-20 ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Container;
