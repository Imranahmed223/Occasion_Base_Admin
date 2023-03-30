import React from "react";
import "./LayOut.scss";
import Sidebar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./../footer/Footer";
const LayOut = ({}) => {
  return (
    <>
      <div className="layout">
        <div className="layout-container">
          <div className="layout-container-sidebar">
            <Sidebar />
          </div>
          <div className="layout-container-content">
            <Navbar />
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LayOut;
