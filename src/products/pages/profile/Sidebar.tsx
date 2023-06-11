import { IconButton, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "../../images/profile-photo.png";
import {
  AiOutlineMacCommand,
  AiOutlineClose,
  AiOutlineTransaction,
} from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { FiSettings, FiLogOut } from "react-icons/fi";

const Sidebar = ({ setOpenSidebar }: { setOpenSidebar: Function }) => {
  return (
    <div className="z-[10] absolute overflow-hidden left-0 top-[12vh] w-[18rem] h-[88vh] bg-black-gradient text-secondaryTheme">
      <MainMenu setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

const MainMenu = ({ setOpenSidebar }: { setOpenSidebar: Function }) => {
  const location = useLocation();

  const handleMenuClick = () => {
    setOpenSidebar(false);
  };

  return (
    <div className="">
      <div className="w-[18rem] h-[10vh] px-2">
        <div className="w-full h-full flex items-center justify-between">
          <Typography className="p-0 text-lg">Dashboard</Typography>
          <IconButton
            onClick={() => setOpenSidebar(false)}
            className="focus:outline-none text-secondaryTheme"
          >
            <AiOutlineClose />
          </IconButton>
        </div>
        <hr className="w-full bg-gray-700" />
      </div>
      <div className="h-[80vh] pt-5 flex flex-col overflow-y-auto">
        <div className="w-full flex flex-col items-center gap-5">
          <img
            className="h-20 w-20 rounded-full ring-2 ring-gray-400"
            src={profilePhoto}
            alt="profile"
          />
          <div className="w-full flex flex-col items-center">
            <h3 className="text-xl font-bold text-secondaryTheme">
              Sazzad Hossen
            </h3>
            <h3 className="text-md font-bold text-secondaryTheme">
              Python Developer
            </h3>
          </div>
          <div className="w-full p-2 flex flex-col gap-2 text-secondaryTheme">
            {menus.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                onClick={handleMenuClick}
              >
                <button
                  className={`w-full flex gap-3 items-center px-2 py-2 rounded-md ${
                    location.pathname === item.url ? "bg-zinc-700" : ""
                  }`}
                >
                  <div className="text-secondaryTheme">{item.icon}</div>
                  {item.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface MenuProps {
  id?: number;
  title?: string;
  url: string;
  icon?: React.ReactNode;
}

export const menus: Array<MenuProps> = [
  {
    id: 1,
    title: "Orders",
    icon: <AiOutlineMacCommand />,
    url: "/it/profile",
  },
  {
    id: 2,
    title: "Transactions",
    icon: <AiOutlineTransaction />,
    url: "/it/profile/transactions",
  },
  {
    id: 3,
    title: "Profile",
    icon: <ImProfile />,
    url: "/it/profile/edit",
  },
  {
    id: 4,
    title: "Settings",
    icon: <FiSettings />,
    url: "/it/profile/settings",
  },
  {
    id: 5,
    title: "Logout",
    icon: <FiLogOut />,
    url: "/it",
  },
];

export default Sidebar;
