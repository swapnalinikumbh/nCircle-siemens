import React, { useState } from "react";
import "./Home.css";
import SidebarDrawer from "../../../pages/SidebarDrawer";
import { useNavigate } from "react-router-dom";
import ROUTES_NAVIGATION from "../../../routes/routes";
const HomeComponent = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };
  const initialFormData = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password !== formData.passwordConfirmation)
      tempErrors.passwordConfirmation = "Passwords do not match";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form data: ", formData);
      setFormData(initialFormData); // Reset form data
    }
  };

  return (
    <div className="home-main">
      <div className="row">
        <div className="col-sm-2">
          <SidebarDrawer />
        </div>
        <div className="col-sm-10">
          <div className="card right-side">
            <h1 className="mt-4">
              Invitation: Frontend Engineer - Siemens Digital Industries
            </h1>
            <div className="top-content mt-2 mb-2">
              <div className="container mt-2">
                <div className="">
                  {showContent ? (
                    <h3>Returning User?</h3>
                  ) : (
                    <>
                      Returning User? Already registered?{" "}
                      <span
                        className="text-primary Click-here"
                        onClick={handleClick}
                      >
                        Click here
                      </span>
                    </>
                  )}
                </div>
                {showContent && (
                  <div className="">
                    <p>
                      If you had already registered previously, and were
                      interrupted in the middle of an activity (due to a browser
                      crash, or net failure) and would like to resume from where
                      you left off, please login by clicking the "Login Again"
                      button below. Use the same username and password as you
                      used earlier. (You must use the username, not your email
                      address to login.)
                    </p>
                    <button
                      className="btn login-again"
                      onClick={() => {
                        navigate(ROUTES_NAVIGATION.LOGIN);
                      }}
                    >
                      Login Again
                    </button>
                    <p className="mt-3">
                      If this is the first time you're coming to this site, fill
                      in the details below.
                    </p>
                  </div>
                )}
                {!showContent && (
                  <p>
                    If this is the first time you're coming to this site, fill
                    in the details below.
                  </p>
                )}
              </div>
            </div>
            <div className="container bottom-content mt-2">
              <p>
                To get started, please provide the information below. Clicking
                on "Continue" will automatically create a login/password on this
                system for you. (We will not spam you. Your email address will
                only be used to communicate with you regarding this activity.)
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-2">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <small className="text-danger">{errors.firstName}</small>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <small className="text-danger">{errors.lastName}</small>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="username">Create username*</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Create username"
                  />
                  {errors.username && (
                    <small className="text-danger">{errors.username}</small>
                  )}
                  <small className="form-text text-muted mt-2">
                    Required. 150 characters or fewer. Letters, digits and
                    @/./+/-/_ only.
                  </small>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    className="form-control mt-2"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="password">Password*</label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <small className="text-danger">{errors.password}</small>
                  )}
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="passwordConfirmation">
                    Password confirmation*
                  </label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                    placeholder="Password confirmation"
                  />
                  {errors.passwordConfirmation && (
                    <small className="text-danger">
                      {errors.passwordConfirmation}
                    </small>
                  )}
                  <small className="form-text text-muted mt-2">
                    Enter the same password as before, for verification.
                  </small>
                </div>
                <button type="submit" className="btn btn-primary submit mt-2">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
