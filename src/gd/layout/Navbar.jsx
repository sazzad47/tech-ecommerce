import { useState } from "react";
import { GenerateNavLinks } from "../constants";
import { Link } from "react-router-dom";
import itLogo from "../assets/itlogo.webp";
import ceLogo from "../assets/celogo.webp";
import gdLogo from "../assets/gdlogo.webp";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  
  const navLinks = GenerateNavLinks();

  return (
    <nav className="h-[12vh] w-full bg-green-600 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex py-6 justify-between items-center navbar fixed top-0 z-10 sm:px-16 px-6">
      <Link to="/gd">
          <img src={gdLogo} alt="logo" width={60} height={60} />
        </Link>
        <Link to="/it">
          <img src={itLogo} alt="logo" width={60} height={60} />
        </Link>
        <Link to="/ce">
          <img src={ceLogo} alt="logo" width={60} height={60} />
        </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-xl ${
              activePage === nav.title ? "text-gray-200" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActivePage(nav.title)}
          >
            <Link
              className="flex flex-col items-center gap-2"
              to={nav.id === "login" ? `/${nav.id}` : `/gd/${nav.id}`}
            >
              {" "}
              <div className="text-2xl">
                {" "}
                <nav.icon />{" "}
              </div>{" "}
              <div> {nav.title} </div>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
