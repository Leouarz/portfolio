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
          percentage: "80%",
          value: "80"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Express_skill",
          content: "ExpressJS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Solidity_skill",
          content: "Solidity",
          percentage: "65%",
          value: "65"
        },
        {
          id: "Web3_skill",
          content: "Web3JS",
          percentage: "65%",
          value: "65"
        },
        {
          id: "Truffle_skill",
          content: "Truffle",
          percentage: "65%",
          value: "65"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          percentage: "80%",
          value: "80"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          percentage: "90%",
          value: "90"
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
                            {/*<span className="pull-right">
                              {skill.percentage}
                            </span>*/}
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
