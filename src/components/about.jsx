import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript / Typescript",
          percentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "90%",
          value: "90"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          percentage: "90%",
          value: "90"
        },
        {
          id: "Express_skill",
          content: "ExpressJS",
          percentage: "90%",
          value: "90"
        },
        {
          id: "Rust_skill",
          content: "Rust",
          percentage: "70%",
          value: "70"
        },
        {
          id: "Substrate_skill",
          content: "Substrate",
          percentage: "60%",
          value: "60"
        },
        {
          id: "Solidity_skill",
          content: "Solidity",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Web3_skill",
          content: "Web3JS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Truffle_skill",
          content: "Truffle",
          percentage: "60%",
          value: "60"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          percentage: "90%",
          value: "90"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          percentage: "90%",
          value: "90"
        },
        {
          id: "Mocha_skill",
          content: "Mocha",
          percentage: "70%",
          value: "70"
        },
        {
          id: "Chai_skill",
          content: "Chai",
          percentage: "70%",
          value: "70"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Curious, dynamic, passionate but also rigorous and determined, these are the qualities that characterize me at work and in life."
        },
        {
          id: "second-p-about",
          content:
            "As an engineer since 2019 and holder of two degrees in computer science and big data, I have not stopped evolving and certifying myself in the fields of development, human resources, project management and blockchain."
        },
        {
          id: "third-p-about",
          content:
            "My vocation is to accompany my clients or my employers in the digital transformation of companies by allowing them to seize with passion this tremendous opportunity offered by digital and emerging technologies"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    {/*<div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>*/}
                    <div className="skill-mf">
                      <div className="title-box-2">
                        <h5 className="title-left">Skills</h5>
                      </div>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                    <p className="pt-3">
                      <a
                        className="btn btn-primary btn px-4 m-1"
                        href="CV.pdf"
                        target="_blank"
                        role="button"
                      >
                        French resume
                      </a>
                      <a
                        className="btn btn-primary btn px-4 m-1"
                        href="CV_english.pdf"
                        target="_blank"
                        role="button"
                      >
                        English resume
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
