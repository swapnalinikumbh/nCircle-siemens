import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import "./Sidebar.css";
const SidebarDrawer = () => {
  return (
    <div className="card side-bar-main">
      <div className="p-2">Powered by:</div>
      <div className="d-flex align-items-center justify-content-center logo-img">
        <Link to="/" className="d-flex align-items-center">
          <img src={logo} alt="siemens Logo" style={{ height: "20px" }} />
        </Link>
      </div>
    </div>
  );
}

export default SidebarDrawer
