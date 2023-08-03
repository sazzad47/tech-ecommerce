import Home from "../pages/home";
import Causes from "../pages/donate";
import CauseDetails from "../pages/causes/[id]";
import CompletedCauseDetails from "../pages/completedCause/[id]";
import Donate from "../pages/causes/donate";
import Apply from "../pages/apply";
import CompletedDonations from "../pages/completedCauses";
import Security from "../pages/support";
import Company from "../pages/company";
import Posts from "../pages/profile/posts";
import Post from "../pages/profile/posts/details";
import Donations from "../pages/profile/donations";
import Tips from "../pages/profile/tips";
import Profile from "../pages/profile/profile";
import Settings from "../pages/profile/settings";
import Funds from "../pages/profile/funds";
import WithdrawDonations from "../pages/profile/funds/WithdrawDonations";
import WithdrawTips from "../pages/profile/funds/WithdrawTips";
import BeVolunteer from "../pages/beVolunteer";


const privateRoutes = [
    { path: "/gd/apply", component: <Apply /> },
    { path: "/gd/apply/volunteer", component: <BeVolunteer /> },
    { path: "/gd/causes/donate/:id", component: <Donate /> },
    { path: "/gd/profile", component: <Posts /> },
    { path: "/gd/profile/posts/:id", component: <Post /> },
    { path: "/gd/profile/donations", component: <Donations /> },
    { path: "/gd/profile/tips", component: <Tips /> },
    { path: "/gd/profile/funds", component: <Funds /> },
    { path: "/gd/profile/funds/donations/withdraw", component: <WithdrawDonations /> },
    { path: "/gd/profile/funds/donations/tips", component: <WithdrawTips /> },
    { path: "/gd/profile/edit", component: <Profile /> },
    { path: "/gd/profile/settings", component: <Settings /> },
]

const publicRoutes = [
    { path: "/gd", component: <Home /> },
    { path: "/gd/home", component: <Home /> },
    { path: "gd/causes", component: <Causes /> },
    { path: "/gd/causes/:id", component: <CauseDetails /> },
    { path: "/gd/completed-donations/:id", component: <CompletedCauseDetails /> },
    { path: "/gd/completed-donations", component: <CompletedDonations /> },
    { path: "/gd/support", component: <Security /> },
    { path: "/gd/company", component: <Company /> },
   
]

export {privateRoutes, publicRoutes};