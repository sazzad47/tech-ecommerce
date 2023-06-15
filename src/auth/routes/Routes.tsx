import Register from "../register";
import ActivateAccount from "../activateAccount";
import Login from "../login";
import ResetPassword from "../resetPassword";
import SendResetPasswordEmail from "../sendResetPasswordEmail";

const routes = [
  { path: "/register", component: <Register /> },
  { path: "/activate-account", component: <ActivateAccount /> },
  { path: "/login", component: <Login /> },
  { path: "/reset-password/:id/:token", component: <ResetPassword /> },
  { path: "/reset-password-email", component: <SendResetPasswordEmail /> },
];

export { routes };
