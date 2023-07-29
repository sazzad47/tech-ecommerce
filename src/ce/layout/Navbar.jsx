import { useState } from "react";
import Drawer from "./profileMenu";
import { GenerateNavLinks } from "../constants";
import { Link } from "react-router-dom";
import itLogo from "../assets/itlogo.webp";
import ceLogo from "../assets/celogo.webp";
import gdLogo from "../assets/gdlogo.webp";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");

  const navLinks = GenerateNavLinks();

 
  return (
    <nav className={`h-[12vh] w-full z-[1000] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] fixed top-0 flex py-6 justify-between items-center sm:px-16 px-6 bg-yellow-500`}>
       <div className="flex gap-4 items-center">
        <Link to="/gd">
          <img src={gdLogo} alt="logo" width={60} height={60} />
        </Link>
        <Link to="/it">
          <img src={itLogo} alt="logo" width={60} height={60} />
        </Link>
        <Link to="/ce">
          <img src={ceLogo} alt="logo" width={60} height={60} />
        </Link>
      </div>
      <div className="relative h-full ml-8 sm:ml-16 sidebar z-[100]">
        {/* <div className="pulse cursor-pointer">
          <AiFillAppstore
            onClick={() => setShowAppMenu(!showAppMenu)}
            className="text-gray-900 text-2xl"
          />
        </div>
        <div
          className={`${
            !showAppMenu ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-10 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="w-full list-none flex justify-end items-start flex-1 flex-col">
            {appItems.map((app, index) => (
              <li
                key={app.id}
                className={`w-full font-poppins font-medium cursor-pointer text-[16px] ${
                  activeApp === app.title
                    ? "text-gray-600"
                    : "text-white"
                } ${index === appItems.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActiveApp(app.title)}
              >
                <Link to={`${app.route}`}>
                  <div className="relative w-full h-full">{app.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

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
              to={nav.id === "login" ? `/${nav.id}` : `/ce/${nav.id}`}
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

      <div className="sm:hidden flex flex-1 justify-end items-center">
      <Drawer />
      </div>
    </nav>
  );
};

export default Navbar;
