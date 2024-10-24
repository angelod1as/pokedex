import clsx from "clsx";
import React, { FC } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "rounded-2xl max-w-sm overflow-hidden shadow-md flex flex-col justify-center items-center p-12 bg-background-tertiary relative"
      )}
    >
      {children}
    </div>
  );
};
