import { ReactNode } from "react";
import { menus } from "./Sidebar";
import styles from "../../style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { unSetUserToken } from "../../../state/slices/common/auth";
import { removeToken } from "../../../state/localStorage";
import { useGetProfileQuery } from "src/state/api/user";
import { RootState } from "src/state/store";
import { Oval } from "react-loader-spinner";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { access_token } = useSelector((state: RootState) => state.auth);
  const { data, isLoading: isFetchingProfile } = useGetProfileQuery({
    access_token,
  });

  const handleLogout = () => {
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate("/ce");
  };

 

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} bg-primaryTheme text-secondaryTheme`}
    >
      <div className="w-full flex flex-col sm:flex-row gap-5">
        <div className="w-full sm:w-1/3 bg-black-gradient-2 max-h-[77vh]">
          <div className="h-auto pt-5 flex flex-col overflow-y-auto">
            <div className="w-full flex flex-col items-center gap-5">
              {isFetchingProfile ? (
                <div className="w-full h-[10vh] flex items-center justify-center">
                  <Oval
                    height={20}
                    width={20}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </div>
              ) : (
                <>
                  <img
                    className="h-20 w-20 rounded-full ring-2 ring-gray-400"
                    src={data.avatar}
                    alt="profile"
                  />
                  <div className="w-full flex flex-col items-center">
                    <h3 className="text-xl font-bold text-secondaryTheme">
                      {data.first_name} {data.last_name}
                    </h3>
                    <h3 className="text-sm font-bold text-secondaryTheme">
                      {data.email}
                    </h3>
                  </div>
                </>
              )}
              <div className="w-full p-5 flex flex-col gap-2 text-secondaryTheme">
                {menus.map((item) => (
                  <Link to={item.url} key={item.id}>
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
                <button
                  onClick={handleLogout}
                  className="w-full flex gap-3 items-center px-2 py-2 rounded-md"
                >
                  <div className="text-secondaryTheme">
                    <FiLogOut />
                  </div>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
