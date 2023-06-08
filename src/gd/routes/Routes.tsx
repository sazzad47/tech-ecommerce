import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";


const routes = [
    { path: "/gd", component: <Home /> },
    { path: "/gd/home", component: <Home /> },
    { path: "/gd/technology", component: <Technology /> },
    { path: "/gd/checkout", component: <Checkout /> },
    { path: "/gd/products/:id", component: <ProductDetails /> },
    { path: "/gd/order", component: <Order /> },
    { path: "/gd/services", component: <Services /> },
    { path: "/gd/security", component: <Security /> },
]

export {routes};