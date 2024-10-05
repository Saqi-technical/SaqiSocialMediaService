import { lazy } from "react";
import Main from "../pages/layouts/Main.jsx";
import LoginLayout from "../pages/layouts/LoginLayout.jsx";

const Checkout = lazy(()=>import("../pages/Checkout.jsx"))
const AllPackages = lazy(() => import("../pages/AllPackages.jsx"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Home /> },
      { path: "/all-packages", element: <AllPackages /> },
    ],
  },
  {
    path: "validate",
    element: <LoginLayout />,
    children: [
      { path: "sign-in", element: <Login /> },
      { path: "sign-up", element: <Register /> },
      { path: "forget-password", element: <ForgetPassword /> },
    ],
  },
  {
    path:"/checkout",
    element:<Checkout/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes;
