import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  naked?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, naked, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        naked ? "" : "py-1 px-4 font-black",
        "bg-button-primary rounded border border-text-body hover:bg-button-hover disabled:bg-button-disabled transition-colors duration-100 shadow-md hover:text-primary disabled:text-gray-500 hover:disabled:text-gray-500 "
      )}
      {...props}
    />
  );
};
