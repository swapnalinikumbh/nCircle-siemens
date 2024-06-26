import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loadable from "../pages/Loadable";
import ROUTES_NAVIGATION from "./routes";

const HomePage = Loadable(lazy(() => import("../pages/HeaderPage")));
const LoginPage = Loadable(lazy(() => import("../pages/LoginPage")));
const AboutPage = Loadable(lazy(() => import("../pages/AboutPage")));
const PrivateRoute = () => {
    return (
        <Routes>
            <Route path={ROUTES_NAVIGATION.HOME} element={<HomePage />} />
            <Route path={ROUTES_NAVIGATION.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES_NAVIGATION.ABOUT} element={<AboutPage />} />
            <Route/>
         </Routes>
     )
}
export default PrivateRoute;