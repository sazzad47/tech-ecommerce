import Home from "../pages/home";
import Architecture from "../pages/architecture";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import Services from "../pages/services";
import Security from "../pages/security";
import Company from "../pages/company";
import Orders from "../pages/profile/order/list";
import OrderDetails from "../pages/profile/order/details";
import OrderEdit from "../pages/profile/order/edit";
import Transactions from "../pages/profile/transaction";
import Profile from "../pages/profile/profile";
import Settings from "../pages/profile/settings";
import PaymentMessage from "../pages/profile/order/details/Message";


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
    { path: "/ce/profile", component: <Orders /> },
    { path: "/ce/profile/orders/:id", component: <OrderDetails /> },
    { path: "/ce/profile/orders/edit/:id", component: <OrderEdit /> },
    { path: "/ce/profile/transactions", component: <Transactions /> },
    { path: "/ce/profile/edit", component: <Profile /> },
    { path: "/ce/profile/settings", component: <Settings /> },
    { path: "/ce/orders/payment", component: <PaymentMessage /> },
]

export {routes};