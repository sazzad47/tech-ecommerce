import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";


const routes = [
    { path: "/ce", component: <Home /> },
    { path: "/ce/home", component: <Home /> },
    { path: "/ce/technology", component: <Technology /> },
    { path: "/ce/checkout", component: <Checkout /> },
    { path: "/ce/products/:id", component: <ProductDetails /> },
    { path: "/ce/order", component: <Order /> },
    { path: "/ce/services", component: <Services /> },
    { path: "/ce/security", component: <Security /> },
]

export {routes};