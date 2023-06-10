import Home from "../pages/home";
import Donate from "../pages/donate";
import Checkout from "../pages/checkout";
import CuaseDetails from "../pages/causes/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";
import Company from "../pages/company";


const routes = [
    { path: "/gd", component: <Home /> },
    { path: "/gd/home", component: <Home /> },
    { path: "/gd/causes", component: <Donate /> },
    { path: "/gd/causes/:id", component: <CuaseDetails /> },
    { path: "/gd/donate", component: <Checkout /> },
    { path: "/gd/order", component: <Order /> },
    { path: "/gd/services", component: <Services /> },
    { path: "/gd/security", component: <Security /> },
    { path: "/gd/company", component: <Company /> },
]

export {routes};