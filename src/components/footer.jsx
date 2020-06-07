import React, { Component } from "react";
//import { FaHeart, FaBeer } from "react-icons/fa";

class footer extends Component {
  render() {
    return (
      <React.Fragment>
        Made with{" "}
        <span role="img" aria-label="heart">
          {" "}
          ❤️
        </span>{" "}
        AND{" "}
        <span role="img" aria-label="beer">
          🍺
        </span>
      </React.Fragment>
    );
  }
}

export default footer;
