import React, { Component } from "react";

class portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <div className="portfolio-div">
          <h1>Portfolio</h1>
          <div className="skills">
            <h3>TECHNICAL SKILLS</h3>
            <div className="items">
              <div className="item">JAVA</div>
              <div className="item">MYSQL</div>
              <div className="item">JAVASCRIPT</div>
              <div className="item">REACTJS</div>
              <div className="item">GIT</div>
            </div>
          </div>
          <div className="projects">
            <h2>PROJECTS</h2>
            <div className="blocks">
              <div className="block">
                <div className="title">TITLE</div>
                <div className="description">DESCRIPTION</div>
                <div className="link">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/vaibhavmahindru"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default portfolio;
