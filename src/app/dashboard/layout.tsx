import React from "react";
import { Footer } from "../components/footer/footer";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
