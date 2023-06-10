import Home from "../pages/home";
import Architecture from "../pages/architecture";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";
import Company from "../pages/company";


const routes = [
    { path: "/ce", component: <Home /> },
    { path: "/ce/home", component: <Home /> },
    { path: "/ce/architecture", component: <Architecture /> },
    { path: "/ce/products/:id", component: <ProductDetails /> },
    { path: "/ce/checkout", component: <Checkout /> },
    { path: "/ce/order", component: <Order /> },
    { path: "/ce/services", component: <Services /> },
    { path: "/ce/security", component: <Security /> },
    { path: "/ce/company", component: <Company /> },
]

export {routes};