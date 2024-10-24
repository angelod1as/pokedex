"use client";
import React, { useEffect, useState } from "react";
import { db } from "../lib/db";
import { redirect } from "next/navigation";
import { Button } from "./Button";
import { isLoggedIn } from "../lib/isLoggedIn";

export const Logout = () => {
  const [logged, setLogged] = useState(false);

  const handleLogout = () => {
    db.logout();
    redirect("/");
  };

  useEffect(() => {
    console.log("is", isLoggedIn());
    if (isLoggedIn()) {
      setLogged(false);
    }
  }, []);

  if (!logged) return null;

  return <Button onClick={handleLogout}>Sign Out</Button>;
};
