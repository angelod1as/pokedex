import clsx from "clsx";
import React, { FC } from "react";

type TagProps = {
  label: string;
  skeleton?: boolean;
};

export const Tag: FC<TagProps> = ({ label, skeleton }) => {
  return (
    <span
      className={clsx(
        skeleton && "bg-skeleton animate-pulse w-[60px] h-[28px]",
        "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      )}
    >
      {label}
    </span>
  );
};
