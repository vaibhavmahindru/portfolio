import React, { Component } from "react";

class contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="contact">
          <h4>
            Drop me an email at{" "}
            <a href="mailto:vaibhavmahindu04@gmail.com">
              vaibhavmahindru04@gmail.com
            </a>
            <br />
            <strong>OR </strong>
            just simply fill the form beow and I will get back to you as soon as
            possible!
          </h4>
          <form>
            <div className="wrap">
              <b>
                <span className="label">Your Name</span>
              </b>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <span className="focus-input"></span>
            </div>

            <div className="wrap">
              <span className="label">Email</span>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Enter your email addess"
                required
              />
              <span className="focus-input"></span>
            </div>

            <div className="wrap">
              <span className="label">Message</span>
              <textarea
                className="input"
                name="message"
                placeholder="Your message here..."
                required
              ></textarea>
              <span className="focus-input"></span>
            </div>

            <div className="submit">
              <button className="msg-btn" type="submit">
                {" "}
                Send Message{" "}
              </button>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default contact;
