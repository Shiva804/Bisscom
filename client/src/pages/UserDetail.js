import React from "react";
import styled from "styled-components";
import { NavigationBar } from "../components/NavigationBar";

import Sidebar from "../components/Sidebar";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 10em;
  margin-right: 6em;
`;

export const UserDetail = (props) => (
  <div>
    <NavigationBar />
    <Sidebar />
    <GridWrapper>
      <form>
        <h1>Enter your sales details</h1>

        <label>
          Month
          <input type="text" name="month" />
        </label>

        <label>
          Sales
          <input type="text" name="sales" />
        </label>

        <button>Submit</button>
      </form>
    </GridWrapper>
  </div>
);
