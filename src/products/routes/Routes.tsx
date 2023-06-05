import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";


const routes = [
    { path: "/", component: <Home /> },
    { path: "/home", component: <Home /> },
    { path: "/technology", component: <Technology /> },
    { path: "/checkout", component: <Checkout /> },
    { path: "/products/:id", component: <ProductDetails /> },
    { path: "/order", component: <Order /> },
    { path: "/services", component: <Services /> },
]

export {routes};