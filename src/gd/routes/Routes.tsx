import Home from "../pages/home";
import Causes from "../pages/donate";
import CuaseDetails from "../pages/causes/[id]";
import Donate from "../pages/causes/donate";
import Apply from "../pages/apply";
import Services from "../pages/services";
import Security from "../pages/security";
import Company from "../pages/company";
import Orders from "../pages/profile/order";
import Transactions from "../pages/profile/transaction";
import Profile from "../pages/profile/profile";
import Settings from "../pages/profile/settings";


const routes = [
    { path: "/gd", component: <Home /> },
    { path: "/gd/home", component: <Home /> },
    { path: "gd/causes", component: <Causes /> },
    { path: "/gd/causes/:id", component: <CuaseDetails /> },
    { path: "/gd/causes/donate/:id", component: <Donate /> },
    { path: "/gd/apply", component: <Apply /> },
    { path: "/gd/services", component: <Services /> },
    { path: "/gd/security", component: <Security /> },
    { path: "/gd/company", component: <Company /> },
    { path: "/gd/profile", component: <Orders /> },
    { path: "/gd/profile/transactions", component: <Transactions /> },
    { path: "/gd/profile/edit", component: <Profile /> },
    { path: "/gd/profile/settings", component: <Settings /> },
]

export {routes};