import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Top from "../../components/Top";
const Main = () => {
  return (
    <div className="relative">
      <Top />

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
