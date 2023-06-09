import Home from "../pages/home";
import Donate from "../pages/donate";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";


const routes = [
    { path: "/gd", component: <Home /> },
    { path: "/gd/home", component: <Home /> },
    { path: "/gd/causes", component: <Donate /> },
    { path: "/gd/donate", component: <Checkout /> },
    { path: "/gd/products/:id", component: <ProductDetails /> },
    { path: "/gd/order", component: <Order /> },
    { path: "/gd/services", component: <Services /> },
    { path: "/gd/security", component: <Security /> },
]

export {routes};