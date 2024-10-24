"use client";

import { useEffect } from "react";
import { isLoggedIn } from "../lib/isLoggedIn";
import { redirect } from "next/navigation";

// Hacky non-component to check if user is logged in
// Again: if this was a real DB, we'd do this server-side
export const DashboardLogout = () => {
  useEffect(() => {
    if (!isLoggedIn()) {
      redirect("/");
    }
  }, []);
  return null;
};
