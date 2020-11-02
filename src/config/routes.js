import { NotFoundPage } from "pages";
import LoginPage from "pages/auth/Login";
import RegistrationPage from "pages/auth/Registration";

const routes = [
  {
    name: "cat",
    path: "/cat",
    component: NotFoundPage,
    isProtected: false,
    exact: true,
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    isProtected: false,
    exact: true,
    routeProps: {
      hasAside: false,
    },
  },
  {
    name: "registration",
    path: "/registration",
    component: RegistrationPage,
    isProtected: false,
    exact: true,
    routeProps: {
      hasAside: false,
    },
  },
];
export default routes;
