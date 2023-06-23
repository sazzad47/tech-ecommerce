import Home from "../pages/home";
import Donate from "../pages/donate";
import Checkout from "../pages/checkout";
import CuaseDetails from "../pages/causes/[id]";
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
    { path: "/gd/causes", component: <Donate /> },
    { path: "/gd/causes/:id", component: <CuaseDetails /> },
    { path: "/gd/donate", component: <Checkout /> },
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