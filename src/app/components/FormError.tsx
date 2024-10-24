import React, { FC } from "react";

type FormProps = {
  error: string;
};

export const FormError: FC<FormProps> = ({ error }) => {
  return <p className="text-center max-w-xs text-error font-bold">{error}</p>;
};
