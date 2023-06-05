import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { menus } from "./menus";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListIcon from "@mui/icons-material/List";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchBar from "./SearchBar";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const Topbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <div className=" w-full flex items-center justify-between gap-0 md:gap-[5rem] h-[10vh]">
      <Button onClick={() => setOpenSidebar(!openSidebar)}>
        {" "}
        <ListIcon className="mr-2 h-4 w-4" /> Categories
      </Button>

      <div className="hidden sm:flex flex-1">
        <SearchBar />
      </div>
      <div className="flex gap-3">
        <Select>
          <SelectTrigger className="w-[140px] sm:w-[180px] bg-blue-gradient">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Newest">Newest</SelectItem>
            <SelectItem value="Oldest">Oldest</SelectItem>
            <SelectItem value="Best Seller">Best Seller</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CSSTransition
        classNames="tech-main-menu"
        in={openSidebar}
        timeout={500}
        unmountOnExit
      >
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </CSSTransition>
    </div>
  );
};

const Sidebar = ({ setOpenSidebar }: { setOpenSidebar: Function }) => {
  const [openMainMenu, setOpenMainMenu] = useState<boolean>(true);
  const [openMegaMenu, setOpenMegaMenu] = useState<boolean>(false);
  const [currentMegaMenu, setCurrentMegaMenu] = useState<string>("");

  return (
    <div className="z-[10] absolute overflow-hidden left-0 top-[12vh] w-[18rem] h-[88vh] bg-black-gradient text-secondaryTheme">
      <CSSTransition
        classNames="tech-mega-menu"
        timeout={500}
        unmountOnExit
        in={openMainMenu}
        onEnter={() => {
          setOpenMegaMenu(false);
        }}
      >
        <MainMenu
          setOpenMegaMenu={setOpenMegaMenu}
          setCurrentMegaMenu={setCurrentMegaMenu}
          setOpenSidebar={setOpenSidebar}
        />
      </CSSTransition>
      <CSSTransition
        classNames="tech-micro-menu"
        timeout={500}
        unmountOnExit
        in={openMegaMenu}
        onEnter={() => {
          setOpenMainMenu(false);
        }}
      >
        <MegaMenu
          setOpenMainMenu={setOpenMainMenu}
          currentMegaMenu={currentMegaMenu}
          setOpenSidebar={setOpenSidebar}
        />
      </CSSTransition>
    </div>
  );
};

const MainMenu = ({
  setOpenMegaMenu,
  setCurrentMegaMenu,
  setOpenSidebar,
}: {
  setOpenMegaMenu: Function;
  setCurrentMegaMenu: Function;
  setOpenSidebar: Function;
}) => {
  return (
    <div className="">
      <div className="w-[18rem] h-[10vh] px-2">
        <div className="w-full h-full flex items-center justify-between">
          <Typography className="p-0 text-lg">Categories</Typography>
          <IconButton
            onClick={() => setOpenSidebar(false)}
            className="focus:outline-none text-secondaryTheme"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <hr className="w-full" />
      </div>
      <div className="h-[80vh] pt-5 flex flex-col overflow-y-auto">
        {menus.map((megaMenu) => (
          <div
            onClick={() => {
              setCurrentMegaMenu(megaMenu.title);
              setOpenMegaMenu(true);
            }}
            key={megaMenu.id}
            className="cursor-pointer flex items-center gap-2 p-2 hover:bg-primaryTheme"
          >
            <Typography className="p-0 text-sm">{megaMenu.title}</Typography>
            <ChevronRightIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

const MegaMenu = ({
  setOpenMainMenu,
  currentMegaMenu,
  setOpenSidebar,
}: {
  currentMegaMenu: string;
  setOpenMainMenu: Function;
  setOpenSidebar: Function;
}) => {
  return (
    <div>
      <div className="w-[18rem] h-[10vh] px-2">
        <div className="relative w-full h-full flex items-center justify-center">
          <IconButton
            onClick={() => setOpenMainMenu(true)}
            className="absolute left-0 focus:outline-none text-secondaryTheme"
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <Typography className="p-0 text-lg">{currentMegaMenu}</Typography>
        </div>
        <hr className="w-full" />
      </div>
      <div className="h-[80vh] pt-5 flex flex-col overflow-y-auto">
        {menus
          .find((megaMenu) => megaMenu.title === currentMegaMenu)
          ?.submenus?.map((microMenu, i) => (
            <div
              onClick={() => {
                setOpenSidebar(false);
              }}
              key={i}
              className="cursor-pointer flex items-center gap-2 p-2 hover:bg-primaryTheme"
            >
              <Typography className="p-0 text-sm">{microMenu.title}</Typography>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Topbar;
