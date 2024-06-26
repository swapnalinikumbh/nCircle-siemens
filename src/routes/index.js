import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES_NAVIGATION from "./routes";
import MainLayout from "../pages/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";

const RouteComponent = () => {
  return (
     <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES_NAVIGATION.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES_NAVIGATION.ABOUT} element={<AboutPage />} />
        </Route>
      </Routes> 
  );
};

export default RouteComponent;
