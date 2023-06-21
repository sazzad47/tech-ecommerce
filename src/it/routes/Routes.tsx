import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";
import Orders from "../pages/profile/order/list";
import OrderDetails from "../pages/profile/order/details";
import OrderEdit from "../pages/profile/order/edit";
import Transactions from "../pages/profile/transaction";
import Profile from "../pages/profile/profile";
import Settings from "../pages/profile/settings";
import PaymentMessage from "../pages/profile/order/details/Message";


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
    { path: "/it/profile/orders/:id", component: <OrderDetails /> },
    { path: "/it/profile/orders/edit/:id", component: <OrderEdit /> },
    { path: "/it/profile/transactions", component: <Transactions /> },
    { path: "/it/profile/edit", component: <Profile /> },
    { path: "/it/profile/settings", component: <Settings /> },
    { path: "/it/orders/payment", component: <PaymentMessage /> },
    
]

export {routes};