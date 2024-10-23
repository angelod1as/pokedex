import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return <button {...props}>Login</button>;
};
