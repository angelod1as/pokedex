"use client";

import React from "react";
import { Input } from "./Input";
import { useDebouncedCallback } from "use-debounce";
import { useApplyQueryParams } from "../hooks/use-apply-query-params";

export const Search = () => {
  const { applyQueryParams, param: query } = useApplyQueryParams({
    paramName: "query",
  });

  const handleFilter = useDebouncedCallback((searched: string) => {
    applyQueryParams(searched);
  }, 300);

  return (
    <Input
      label="Filter"
      type="text"
      name="filter"
      id="filter"
      onChange={(e) => {
        handleFilter(e.target.value);
      }}
      defaultValue={query}
    />
  );
};
