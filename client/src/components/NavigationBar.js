import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import "../App.css";
import auth from "../auth";
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: relative;

    width: 100%;
    left: 25%;
    right: 25%;
  }
`;

let route = null;

const logout = () => {
  window.location = "/";
  auth.logout();
};

export const NavigationBar = () => (
  <div>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Bisscom</Navbar.Brand>
        <button
          id="logout"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
    </Styles>
  </div>
);
