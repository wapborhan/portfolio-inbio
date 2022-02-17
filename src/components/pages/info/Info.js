import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { FiUser } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(255, 1, 79)",
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 700,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(255, 1, 79)",
  },
}));
class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  handleType = (count) => {
    // access word count number
    // console.log(count);
  };

  handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  render() {
    return (
      <div id="about" className="rn-slide-area">
        <div className="slide slider-style-3">
          <div id="particles-js"></div>
          <div className="container">
            <div className="row slider-wrapper">
              <div className="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
                <div className="slider-info">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="user-info-top">
                        <div className="user-info-header">
                          <div className="sr-user">
                            <div className="user">
                              <i>
                                <FiUser />
                              </i>
                            </div>
                            <h2 className="title">
                              Hi, I am <span>Borhan</span>
                            </h2>
                          </div>

                          {/* <!-- type headline start--> */}
                          <span className="cd-headline clip is-full-width">
                            <span className="cd-words-wrapper">
                              <Typewriter
                                words={[
                                  "Front-End Developer.",
                                  "Wordpress Developer.",
                                  "App Developer.",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={this.handleDone}
                                onType={this.handleType}
                              />
                            </span>
                          </span>
                          {/* <!-- type headline end --> */}
                          <p className="disc">
                            Develop a passion for learning. If you do, you will
                            never cease to grow.
                          </p>
                        </div>
                        <div className="user-info-footer">
                          <div className="info">
                            <i data-feather="file"></i>
                            <span>
                              Developer{" "}
                              <a href="http://www.codestrickz.xyz">
                                CodesTrickZ
                              </a>
                            </span>
                          </div>
                          <div className="info">
                            <i data-feather="mail"></i>
                            <span>
                              <a href="mailto:borhaninfos@gmail.com">
                                borhaninfos@gmail.com
                              </a>
                            </span>
                          </div>
                          <div className="info">
                            <i data-feather="map-pin"></i>
                            <span>
                              <a href="https://goo.gl/maps/MA7zFUaa29n3J6JA6">
                                {" "}
                                Kushtia, Khulna, Bangladesh
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="user-info-bottom">
                        <div className="dwmycl">
                          Download my curriculum vitae:{" "}
                        </div>
                        <div className="button-wrapper d-flex">
                          <a className="rn-btn mr--30" href="more/cv.html">
                            <span>DOWNLOAD CV</span>
                          </a>
                          <a className="rn-btn" href="#contacts">
                            <span>CONTACT ME</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 order-xl-2 col-lg-12 col-xl-7">
                <div className="background-image-area srpd">
                  <div className="rn-skill-area section-height">
                    <div className="inner slide skills">
                      <h5 className="title">About My Skill</h5>
                      <div className="skill-share-inner ">
                        <span className="title">Primary Skills on</span>
                        <ul className="skill-share d-flex liststyle justify-content-center">
                          <LightTooltip title="HTML" placement="top" arrow>
                            <li>
                              <img
                                src="images/icons/html.png"
                                alt="Icons Images"
                              />{" "}
                            </li>
                          </LightTooltip>

                          <LightTooltip title="css" placement="top" arrow>
                            <li>
                              <img
                                src="images/icons/css.png"
                                alt="Icons Images"
                              />
                            </li>
                          </LightTooltip>
                          <li>
                            <img src="images/icons/js.png" alt="Icons Images" />
                          </li>
                          <li>
                            <img
                              src="images/icons/react.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="images/icons/vue.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img src="images/icons/ts.png" alt="Icons Images" />
                          </li>
                          <li>
                            <img
                              src="images/icons/angular.png"
                              alt="Icons Images"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="skill-share-inner skill-share-inner-width margin-top-25">
                        <span className="title">Secondary Skills on</span>
                        <ul className="skill-share d-flex liststyle">
                          <li>
                            <img src="images/icons/nodejs.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/mongodb.png" alt="Icons" />
                          </li>
                          <li>
                            <img
                              src="images/icons/materialui.png"
                              alt="Icons"
                            />
                          </li>
                          <li>
                            <img src="images/icons/bootstrap.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/sass.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/jquary.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/wordpress.png" alt="Icons" />
                          </li>
                        </ul>
                      </div>
                      <div className="skill-share-inner skill-share-inner-width margin-top-25">
                        <span className="title">Tools I Used</span>
                        <ul className="skill-share d-flex liststyle">
                          <li>
                            <img src="images/icons/vscode.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/brackets.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/github.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/git.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/terminal.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/xaamp.png" alt="Icons" />
                          </li>
                        </ul>
                      </div>
                      <div className="skill-share-inner skill-share-inner-width margin-top-25">
                        <span className="title">Graphical Skills</span>
                        <ul className="skill-share d-flex liststyle">
                          <li>
                            <img src="images/icons/ps.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/xd.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/figma.png" alt="Icons" />
                          </li>
                          <li>
                            <img src="images/icons/sketch.png" alt="Icons" />
                          </li>
                          <li>
                            <img
                              src="images/icons/illustrator.png"
                              alt="Icons"
                            />
                          </li>
                          <li>
                            <img src="images/icons/pr.png" alt="Icons" />
                          </li>{" "}
                          <li>
                            <img src="images/icons/canva.png" alt="Icons" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
