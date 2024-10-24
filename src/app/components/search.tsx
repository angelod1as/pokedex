"use client";

import React from "react";
import { Input } from "./Input";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Search = () => {
  const paramName = "query";
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const query = searchParams.get(paramName)?.toString();

  const applyQueryParams = (searched: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (searched) {
      params.set(paramName, searched);
    } else {
      params.delete(paramName);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleFilter = useDebouncedCallback((searched: string) => {
    applyQueryParams(searched.toLowerCase().trim());
  }, 300);

  return (
    <Input
      label="Filter"
      type="text"
      name="filter"
      id="filter"
      inline={true}
      onChange={(e) => {
        handleFilter(e.target.value);
      }}
      defaultValue={query}
    />
  );
};
