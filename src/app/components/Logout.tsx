"use client";
import React from "react";
import { db } from "../lib/db";
import { redirect } from "next/navigation";
import { Button } from "./Button";

export const Logout = () => {
  const handleLogout = () => {
    db.logout();
    redirect("/");
  };

  return <Button onClick={handleLogout}>Sign Out</Button>;
};
