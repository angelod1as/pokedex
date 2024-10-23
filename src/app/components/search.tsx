"use client";

import React from "react";
import { Input } from "./Input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searched: string) => {
    const params = new URLSearchParams(searchParams);
    if (searched) {
      params.set("query", searched);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
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
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};
