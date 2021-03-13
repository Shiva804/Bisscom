import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="logo me-auto">
            <h1 id="title">
              <a href="index.html">Bisscom</a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#login">
                  Login
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  }
}
