import React from "react";
import HeaderPage from "../HeaderPage";
import { Outlet } from "react-router-dom";
import FooterPage from "../FooterPage";
import "./MainLayout.css"
const MainLayout = () => {
  return (
    <div className="main-content">
      <HeaderPage />
      <div className="main-layout-outlet-container container-fluid">
        <Outlet />
      </div>
      <FooterPage />
    </div>
  );
};

export default MainLayout;
