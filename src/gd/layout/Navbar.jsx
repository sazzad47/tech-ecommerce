import { useState } from "react";
import { close, logo, menu } from "../assets";
import { appItems, navLinks } from "../constants";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  const [activeApp, setActiveApp] = useState("IT");
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);

  return (
    <nav className="h-[12vh] w-full bg-primaryTheme flex py-6 justify-between items-center navbar fixed top-0 z-10 sm:px-16 px-6">
      <Link to="/ce">
        <img src={logo} alt="logo" className="w-[50px] h-[42px]" />
      </Link>
      <div className="relative h-full ml-8 sm:ml-16 sidebar z-[100]">
        <div className="pulse cursor-pointer">
          <AiFillAppstore
            onClick={() => setShowAppMenu(!showAppMenu)}
            className="text-secondaryTheme text-2xl"
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
                  activeApp === app.title ? "text-secondaryTheme" : "text-dimWhite"
                } ${index === appItems.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActiveApp(app.title)}
              >
                <Link to={`${app.route}`}>
                  <div className="relative w-full h-full">{app.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              activePage === nav.title ? "text-secondaryTheme" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActivePage(nav.title)}
          >
            <Link
              className="flex flex-col items-center gap-2"
              to={`/gd/${nav.id}`}
            >
              {" "}
              <div className="text-lg">
                {" "}
                <nav.icon />{" "}
              </div>{" "}
              <div> {nav.title} </div>{" "}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={showNavMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setShowNavMenu(!showNavMenu)}
        />

        <div
          className={`${
            !showNavMenu ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  activePage === nav.title ? "text-secondaryTheme" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActivePage(nav.title)}
              >
                <Link to={`/gd/${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
