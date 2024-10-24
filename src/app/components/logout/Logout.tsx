"use client";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "../Button";
import { db } from "@/app/lib/db";
import logoutSvg from "./logout.svg";
import Image from "next/image";

export const Logout = () => {
  const handleLogout = () => {
    db.logout();
    redirect("/");
  };

  return (
    <Button onClick={handleLogout} naked={true}>
      <Image src={logoutSvg} alt="Logout" width={30} height={30} />
    </Button>
  );
};
