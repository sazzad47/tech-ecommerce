import { ReactNode, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Sidebar, { menus } from "./Sidebar";
import styles from "../../style";
import profilePhoto from "../../images/profile-photo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../../../state/slices/common/auth";
import { removeToken } from "../../../state/localStorage";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleLogout = ()=> {
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/gd')
  }

  const handleMenuClick = () => {
    setOpenSidebar(false);
  };
  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className="block sm:hidden"
      >
        Open
      </button>
      <CSSTransition
        classNames="tech-main-menu"
        in={openSidebar}
        timeout={500}
        unmountOnExit
      >
        <Sidebar setOpenSidebar={setOpenSidebar} />
      </CSSTransition>
      <div className="w-full flex gap-5">

      <div className="w-1/3 bg-black-gradient-2">
        <div className="h-auto pt-5 flex flex-col overflow-y-auto">
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
            <div className="w-full p-5 flex flex-col gap-2 text-secondaryTheme">
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
             <button onClick={handleLogout} className="w-full flex gap-3 items-center px-2 py-2 rounded-md" >
              <div className="text-secondaryTheme">
                <FiLogOut />
              </div>
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
      </div>
    </div>
  );
};

export default Layout;
