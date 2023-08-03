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
      <main className="">
        <Navbar />
        <div className="pt-[12vh] bg-green-600">{children}</div>
          <div className={``}>
            <Footer />
          </div>
      </main>
    </>
  );
};

export default Layout;
