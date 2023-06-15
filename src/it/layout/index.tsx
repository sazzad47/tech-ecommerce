import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import styles from "../style";
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
        <div className="pt-[12vh]">{children}</div>
        <div className={`bg-primaryTheme ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
