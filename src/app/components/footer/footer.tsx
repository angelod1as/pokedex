import Link from "next/link";
import React from "react";
import { Logout } from "../logout/Logout";
import { PageNav } from "../page-nav";
import github from "./github.svg";
import Image from "next/image";
import { Button } from "../Button";

export const Footer = () => {
  return (
    <div className=" fixed bottom-0 w-full right-0">
      <div className=" rounded-lg p-3 bg-background-secondary flex justify-between items-center w-auto m-2">
        <div>
          <Button naked>
            <Link
              className="flex font-extrabold md:text-2xl text-sm"
              target="_blank"
              href="https://github.com/angelod1as/pokedex"
            >
              <Image src={github} alt="github" width={30} height={30} />
            </Link>
          </Button>
        </div>
        <div className="flex-1 flex-grow">
          <PageNav />
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};
