"use client";

import React from "react";
import { Input } from "./Input";
import { useDebouncedCallback } from "use-debounce";
import { useApplyQueryParams } from "../hooks/use-apply-query-params";

export const Search = () => {
  const { applyQueryParams, param: query } = useApplyQueryParams({
    paramName: "query",
  });

  const handleSearch = useDebouncedCallback((searched: string) => {
    applyQueryParams(searched);
  }, 300);

  return (
    <Input
      label="Search"
      type="text"
      name="search"
      id="search"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={query}
    />
  );
};
