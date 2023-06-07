import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";


const routes = [
    { path: "/", component: <Home /> },
    { path: "/it", component: <Home /> },
    { path: "/it/home", component: <Home /> },
    { path: "/it/technology", component: <Technology /> },
    { path: "/it/checkout", component: <Checkout /> },
    { path: "/it/products/:id", component: <ProductDetails /> },
    { path: "/it/order", component: <Order /> },
    { path: "/it/services", component: <Services /> },
    { path: "/it/security", component: <Security /> },
]

export {routes};