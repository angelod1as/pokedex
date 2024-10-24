import React from "react";
import { Footer } from "../components/footer";

const Layout = ({
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
