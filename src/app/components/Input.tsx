import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  inline?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, className, inline, ...props }: InputProps) => {
  return (
    <div className={clsx(inline ? "items-center" : "flex-col", "flex gap-1")}>
      <label htmlFor={props.name} className="font-bold ">
        {label}
      </label>
      <input
        {...props}
        className={clsx(
          className,
          "py-1 px-2 border border-text-body rounded w-full"
        )}
      />
    </div>
  );
};
