import React from "react";

type FormProps = {
  error: string;
};

export const FormError = ({ error }: FormProps) => {
  return <p className="">{error}</p>;
};
