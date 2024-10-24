import React from "react";
import { Footer } from "../components/footer";
import { PageProps } from "./page";

const Layout = async ({ children }: PageProps) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
