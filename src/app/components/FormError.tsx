import React from "react";

type FormProps = {
  error: string;
};

export const FormError = ({ error }: FormProps) => {
  return <p className="text-center max-w-xs text-error font-bold">{error}</p>;
};
