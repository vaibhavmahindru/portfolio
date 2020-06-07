import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <a href="#about" className="option">
            About
          </a>
          <a href="#portfolio" className="option">
            Portfolio
          </a>
          <a href="#contact" className="option">
            Contact
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
