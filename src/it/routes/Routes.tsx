import Home from "../pages/home";
import Technology from "../pages/technology";
import Checkout from "../pages/checkout";
import ProductDetails from "../pages/products/[id]";
import Order from "../pages/order";
import CreateOrder from "../pages/orderForm";
import Security from "../pages/security";
import Company from "../pages/company";
import Services from "../pages/services";
import WebDevelopment from "../pages/services/WebDevelopment";
import AppDevelopment from "../pages/services/AppDevelopment";
import SEO from "../pages/services/SEO";
import PluginDevelopment from "../pages/services/PluginDevelopment";
import Optimization from "../pages/services/Optimization";
import BugFixing from "../pages/services/BugFixing";
import Support from "../pages/services/Support";
import ThemeDevelopment from "../pages/services/ThemeDevelopment";
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
    { path: "/it/order/create", component: <CreateOrder /> },
    { path: "/it/services", component: <Services /> },
    { path: "/it/services/web-development", component: <WebDevelopment /> },
    { path: "/it/services/app-development", component: <AppDevelopment /> },
    { path: "/it/services/seo", component: <SEO /> },
    { path: "/it/services/plugin-development", component: <PluginDevelopment /> },
    { path: "/it/services/optimization", component: <Optimization /> },
    { path: "/it/services/theme-customization", component: <ThemeDevelopment /> },
    { path: "/it/services/bug-fixing", component: <BugFixing /> },
    { path: "/it/services/support", component: <Support /> },
    { path: "/it/security", component: <Security /> },
    { path: "/it/company", component: <Company /> },
    { path: "/it/profile", component: <Orders /> },
    { path: "/it/profile/orders/:id", component: <OrderDetails /> },
    { path: "/it/profile/orders/edit/:id", component: <OrderEdit /> },
    { path: "/it/profile/transactions", component: <Transactions /> },
    { path: "/it/profile/edit", component: <Profile /> },
    { path: "/it/profile/settings", component: <Settings /> },
    { path: "/it/orders/payment", component: <PaymentMessage /> },
    
]

export {routes};