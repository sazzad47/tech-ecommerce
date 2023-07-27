import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="bg-primaryTheme">
        <Navbar />
        <div className="pt-[12vh]">{children}</div>
        <div className="w-full mt-[5rem]">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
