import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.name} className="font-bold">
        {label}
      </label>
      <input
        {...props}
        className={clsx(className, "py-1 px-2 border border-text-body rounded")}
      />
    </div>
  );
};
