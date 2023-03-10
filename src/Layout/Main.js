import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
