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
        naked ? "" : "py-1 px-4 font-black border border-text-body shadow-md",
        "bg-button-primary rounded  hover:bg-button-hover disabled:bg-button-disabled transition-colors duration-100  hover:text-primary disabled:text-gray-500 hover:disabled:text-gray-500 flex flex-col justify-center items-center"
      )}
      {...props}
    />
  );
};
