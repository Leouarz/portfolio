import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Ghali El Ouarzazi</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Blockchain Developer",
                      "IT Consultant",
                      "Fullstack Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                  style={{marginRight:"2px"}}
                >
                  View my work
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                  style={{marginLeft:"2px"}}
                >
                  View my work
                </a>
              </p>
              <div className="socials">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ghali-el-ouarzazi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color:"#ffffff"}}
                    >
                      <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Leouarz"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color:"#ffffff"}}
                    >
                      <span className="ico-circle">
                        <i className="ion-social-github"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
