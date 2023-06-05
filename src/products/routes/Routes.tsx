import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";


const routes = [
    { path: "/", component: <Home /> },
    { path: "/home", component: <Home /> },
    { path: "/technology", component: <Technology /> },
    { path: "/checkout", component: <Checkout /> },
    { path: "/products/:id", component: <ProductDetails /> },
]

export {routes};