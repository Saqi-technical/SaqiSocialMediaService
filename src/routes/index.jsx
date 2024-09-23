import { lazy } from "react";
import Main from "../pages/layouts/Main.jsx";
const Home = lazy(()=>import("../pages/Home.jsx"))
const NotFound = lazy(()=>import("../pages/NotFound.jsx"))



const routes = [
  {
    path: "/",
    element: <Main/>,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default routes


  