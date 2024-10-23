import React, { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name}>{label}</label>
      <input {...props} />
    </div>
  );
};
