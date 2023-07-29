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
      <main className="relative">
        <Navbar />
        <div className="pt-[12vh]">{children}</div>

        <div className={`px-[1rem] md:px-[5rem] bg-yellow-500`}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
