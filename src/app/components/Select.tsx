"use client";
import React, { SelectHTMLAttributes } from "react";
import { useApplyQueryParams } from "../hooks/use-apply-query-params";

type SelectProps = {
  label: string;
  options: Array<{
    name: string;
  }>;
  queryLabel: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ options, queryLabel, ...props }: SelectProps) => {
  const { applyQueryParams, param } = useApplyQueryParams({
    paramName: queryLabel,
  });

  const handleSelect = (type: string) => {
    applyQueryParams(type);
  };

  return (
    <select
      {...props}
      className=" bg-black border border-orange-800 rounded text-white"
      defaultValue={param || ""}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">All</option>
      {options.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
