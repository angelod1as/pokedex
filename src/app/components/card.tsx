import clsx from "clsx";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        className,
        "max-w-sm rounded overflow-hidden shadow-md flex flex-col justify-center items-center p-12 bg-background-tertiary"
      )}
    >
      {children}
    </div>
  );
};
