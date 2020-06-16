import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <a href="#ab" className="option">
            About
          </a>
          <a href="#port" className="option">
            Portfolio
          </a>
          <a href="#cont" className="option">
            Contact
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
