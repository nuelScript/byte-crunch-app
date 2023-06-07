"use client";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
