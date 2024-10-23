import React, { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>{label}</label>
      <input
        {...props}
        className=" bg-black border border-orange-800 rounded text-white"
      />
    </div>
  );
};
