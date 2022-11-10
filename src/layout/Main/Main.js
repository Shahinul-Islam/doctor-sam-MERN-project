import React from "react";
// import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import useTitle from "../../hooks/useTitle";

const Main = () => {
  // useTitle("Home");
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
