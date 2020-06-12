import React from "react";
import Intro from "./components/intro";
import Header from "./components/header";
import About from "./components/about";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <section className="header">
          <Header />
          <Intro />
        </section>

        <About />
        <Portfolio />
        <div className="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
