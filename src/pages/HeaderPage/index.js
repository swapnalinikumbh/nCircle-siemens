import React from "react";
import "./Header.css";
import siemens_logo from "../../assets/siemens-logo.png";
import { Link } from "react-router-dom";
const HeaderPage = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-2">
      <div className="d-flex align-items-center">
        <Link to="/" className="d-flex align-items-center">
          <img
            src={siemens_logo}
            alt="siemens Logo"
            style={{ height: "50px" }}
          />
        </Link>
      </div>
      <nav className="d-flex align-items-center">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="mailto:nikumbh05@gmail.com">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPage;
