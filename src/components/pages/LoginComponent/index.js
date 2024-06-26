import React, { useState } from "react";
import SidebarDrawer from "../../../pages/SidebarDrawer";
import "./Login.css";
const LoginComponent = () => {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () => {
    setShowContent(true);
  };
  const initialFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.password) tempErrors.password = "Password is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successfully");
      setFormData(initialFormData); // Reset form data
    }
  };
  return (
    <div className="login-main">
      <div className="row">
        <div className="col-sm-2">
          <SidebarDrawer />
        </div>
        <div className="col-sm-10">
          <div className="card right-side">
            {showContent ? (
              <h1 className="mt-4">Password Reset</h1>
            ) : (
              <>
                <h1 className="mt-4">Login</h1>
                <div className="top-content mt-2 mb-2">
                  <div className="container mt-2">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mt-2">
                        <label htmlFor="username">Username*</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Enter Username"
                        />
                        {errors.username && (
                          <small className="text-danger">
                            {errors.username}
                          </small>
                        )}
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="password">Password*</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter Password"
                        />
                        {errors.password && (
                          <small className="text-danger">
                            {errors.password}
                          </small>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary mt-2 mb-2"
                      >
                        Login
                      </button>
                    </form>

                    <div className="mb-2">Don't have a login?</div>
                    <p>
                      This is an invitation-only site. You can only log in if
                      you have received an invitation from one of our companies.
                      If you have received an invitation, then please use the
                      invitation link to log into the system. You cannot log
                      into this system from this page. You must find the
                      original email and click on the invitation link.
                    </p>
                    <div className="mb-2">Returning Users</div>
                    <p>
                      If you already logged into this system earlier, then use
                      the username/password to login. If you forgot the username
                      or the password that you created earlier,
                      <span
                        className="Click-here text-primary me-1 ms-1"
                        onClick={handleClick}
                      >
                        click here
                      </span>
                      to request a password reset link (you'll need to remember
                      the email address you used).
                    </p>
                  </div>
                </div>
              </>
            )}
            {showContent && (
              <div className="top-content mt-2 mb-2">
                <div className="container mt-2">
                  <p>
                    Please fill in this information, and a password reset link
                    will be sent to the email address you registered with us.
                    Clicking on this link will allow you to reset your password
                    and create a new one.
                  </p>
                  <div className="form-group mt-2">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      className="form-control mt-2"
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <button className="mt-2 mb-2 ">Submit</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
