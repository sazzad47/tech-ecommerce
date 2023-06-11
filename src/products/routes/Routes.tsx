import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";
import Orders from "../pages/profile/order";
import Transactions from "../pages/profile/transaction";
import Profile from "../pages/profile/profile";
import Settings from "../pages/profile/settings";


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
    { path: "/it/profile", component: <Orders /> },
    { path: "/it/profile/transactions", component: <Transactions /> },
    { path: "/it/profile/edit", component: <Profile /> },
    { path: "/it/profile/settings", component: <Settings /> },
]

export {routes};