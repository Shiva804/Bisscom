import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Bisscom</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}
