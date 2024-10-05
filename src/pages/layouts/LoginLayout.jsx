import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default LoginLayout;
