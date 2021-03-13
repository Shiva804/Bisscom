import React, { Component } from "react";
import axios from "../config";
import { Redirect } from "react-router-dom";
import auth from "../auth";
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      redirect: null,
    };
  }

  handleChange = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });

        break;
      case "password":
        this.setState({ password: e.target.value });
        break;

      default:
        break;
    }
  };

  handleSubmit = async (type, e) => {
    e.preventDefault();

    if (type == "register") {
      const register = await axios.post("/register", {
        email: this.state.email,
        password: this.state.password,
      });
      auth.login(() => {
        this.setState({ redirect: "/dashboard" });
      });
    }
    if (type == "login") {
      const login = await axios.post("/login", {
        email: this.state.email,
        password: this.state.password,
      });
      document.getElementById("reg-email").value = "";
      document.getElementById("reg-password").value = "";

      document.getElementById("log-email").value = "";
      document.getElementById("log-password").value = "";

      auth.login(() => {
        this.setState({ redirect: "/dashboard" });
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div>
        <div className="signup-container">
          <div className="log">
            <div className="col-md-6">
              <form className="box">
                <h1>Login</h1>
                <p className="text-muted">
                  Please enter your email and password!
                </p>
                <input
                  type="text"
                  name=""
                  id="log-email"
                  placeholder="Email"
                  onChange={(e) => {
                    this.handleChange("email", e);
                  }}
                />
                <input
                  type="password"
                  name=""
                  id="log-password"
                  placeholder="Password"
                  onChange={(e) => {
                    this.handleChange("password", e);
                  }}
                />
                <a className="forgot text-muted">Forgot password?</a>
                <input
                  type="submit"
                  name=""
                  value="Login"
                  onClick={(e) => {
                    this.handleSubmit("login", e);
                  }}
                />
              </form>
            </div>
          </div>

          <div className="reg">
            <div className="col-md-6">
              <form className="box">
                <h1>Register</h1>
                <p className="text-muted">
                  Please enter your Email and password!
                </p>
                <input
                  id="reg-email"
                  type="text"
                  name=""
                  placeholder="Email"
                  onChange={(e) => {
                    this.handleChange("email", e);
                  }}
                />
                <input
                  id="reg-password"
                  type="password"
                  name=""
                  placeholder="Password"
                  onChange={(e) => {
                    this.handleChange("password", e);
                  }}
                />
                <input
                  type="submit"
                  name=""
                  value="Register"
                  id="reg-btn"
                  onClick={(e) => {
                    this.handleSubmit("register", e);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
