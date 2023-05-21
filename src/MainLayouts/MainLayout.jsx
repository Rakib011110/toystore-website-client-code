import React from "react";
import Navbar from "../Components/Pages/Share/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/Share/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
