import { useEffect, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { menus } from "./menus";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListIcon from "@mui/icons-material/List";
import { CSSTransition } from "react-transition-group";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchBar from "./SearchBar";
import { Button } from "../../../../components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/select";
import filterSearch from "./filterSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetPostCountriesQuery } from "src/state/api/gd";

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [countries, setCountries] = useState([]);
  const { data } = useGetPostCountriesQuery(null);

  const countriesOptions = countries?.map((item, index) => (
    <SelectItem key={index} value={item || ""}>
      {item}
    </SelectItem>
  ));

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  return (
    <div className="w-full flex flex-col sm:flex-row gap-5 items-center">
      <Button
        className="w-full sm:w-auto"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <ListIcon className="mr-2 h-4 w-4" /> Categories
      </Button>
      <Select
        onValueChange={(value) => {
          filterSearch({ location, country: value, navigate: navigate });
        }}
        
      >
        <SelectTrigger className="w-full sm:w-[180px] bg-blue-gradient">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
       {countriesOptions}
        </SelectContent>
      </Select>
      <SearchBar />
      <Select  onValueChange={(value) => {
          filterSearch({ location, ordering: value, navigate: navigate });
        }}
        >
        <SelectTrigger className="w-full sm:w-[180px] bg-blue-gradient">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-created_at">Newest</SelectItem>
          <SelectItem value="created_at">Oldest</SelectItem>
        </SelectContent>
      </Select>
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
          setOpenMainMenu={setOpenMainMenu}
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
  setOpenMainMenu,
}: {
  setOpenMegaMenu: Function;
  setCurrentMegaMenu: Function;
  setOpenSidebar: Function;
  setOpenMainMenu: Function;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

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
              if (megaMenu.submenus) {
                setCurrentMegaMenu(megaMenu.title);
                setOpenMegaMenu(true);
              } else {
                filterSearch({
                  location,
                  category: megaMenu.title,
                  navigate: navigate,
                });
                setOpenSidebar(false);
                setOpenMainMenu(false);
              }
            }}
            key={megaMenu.id}
            className="cursor-pointer flex items-center gap-2 p-2 hover:bg-primaryTheme"
          >
            <Typography className="p-0 text-sm">{megaMenu.title}</Typography>
            {megaMenu.submenus && <ChevronRightIcon />}
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
  const location = useLocation();
  const navigate = useNavigate();

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
                filterSearch({
                  location,
                  category: microMenu.title,
                  navigate: navigate,
                });
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
