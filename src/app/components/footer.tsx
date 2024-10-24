import Link from "next/link";
import React from "react";
import { Logout } from "./Logout";
import { PageNav } from "./page-nav";

export const Footer = () => {
  return (
    <div className=" fixed bottom-0 w-full right-0">
      <div className=" rounded-lg p-3 bg-background-secondary flex items-center justify-between w-auto m-2">
        <Link className="flex font-extrabold text-2xl" href="/">
          Pokédex!
        </Link>
        <PageNav />
        <Logout />
      </div>
    </div>
  );
};
