import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        " bg-button-primary rounded py-1 px-4 border border-text-body hover:bg-button-hover disabled:bg-button-disabled transition-colors duration-100 shadow-md hover:text-primary font-black"
      )}
      {...props}
    />
  );
};
