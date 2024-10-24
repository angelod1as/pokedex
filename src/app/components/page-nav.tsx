"use client";

import React from "react";
import { LAST_PAGE, POKEMONS_PER_PAGE, TOTAL_POKEMONS } from "../lib/constants";
import { Button } from "./Button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const PageNav = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const addPage = () => {
    const newPage = currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const removePage = () => {
    const newPage = currentPage - 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid [grid-template-areas:'prev_curr_next']">
      <Button disabled={currentPage <= 1} onClick={removePage}>
        prev
      </Button>
      <div>
        {currentPage}/{LAST_PAGE}
      </div>
      <Button disabled={currentPage >= LAST_PAGE} onClick={addPage}>
        next
      </Button>
    </div>
  );
};
