import React, { Component } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

class intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="info">
          <img src="/images/v.jpg" alt="" className="image" />

          <h1>Hi, I'm Vaibhav Mahindru.</h1>
          <h2>Some thing.</h2>
          <div className="social-icons">
            <a
              className="github"
              target="_b"
              href="https://github.com/vaibhavmahindru"
            >
              <FaGithub />
            </a>
            <a
              className="instagram"
              target="_b"
              href="https://instagram.com/vaibhav_mahindru_?igshid=6195f2sbzw3q"
            >
              <FaInstagram />
            </a>
            <a
              className="linkedin"
              target="_b"
              href="https://www.linkedin.com/in/vaibhav-mahindru-845604175/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default intro;
