import React from "react";
import LazyLoad from "react-lazyload";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

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

export default function AboutS() {
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="slide slider-style-1">
      <div className="container">
        <div className="srpad">
          <div className="row row--30 align-items-center">
            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="content padtse">
                <div className="inner mb-5">
                  <span className="subtitle">Welcome to my world</span>
                  <h1 className="title">
                    Hi, I’m <span>Borhan Uddin</span>
                    <br />
                    <span className="header-caption" id="page-top">
                      <span className="cd-headline clip is-full-width">
                        <span>a </span>

                        <span className="cd-words-wrapper">
                          <b className="is-visible ms-3">
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
                              onLoopDone={handleDone}
                              onType={handleType}
                            />
                          </b>
                        </span>
                      </span>
                    </span>
                  </h1>

                  <div>
                    <p className="description">
                      I like working with JavaScript. Therefore I use React JS
                      to make stunning UI. I am ready to work with honesty,
                      dedication, sincerity, and confidence to adapt to any
                      situation to achieve my purpose.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social-share-inner-left">
                      <span className="title">find with me</span>
                      <ul className="social-share d-flex liststyle">
                        <li className="facebook">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-facebook"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                              ></line>
                            </svg>
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-linkedin"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="skill-share-inner">
                      <span className="title">best skill on</span>
                      <ul className="skill-share d-flex liststyle justify-content-left">
                        <LightTooltip title="MONGODB" placement="top" arrow>
                          <li>
                            <SiMongodb className="mongodb" />
                          </li>
                        </LightTooltip>
                        <LightTooltip title="EXPRESS" placement="top" arrow>
                          <li>
                            <SiExpress className="Express" />
                          </li>
                        </LightTooltip>
                        <LightTooltip title="REACT" placement="top" arrow>
                          <li>
                            <FaReact className="react" />
                          </li>
                        </LightTooltip>
                        <LightTooltip title="NODE JS" placement="top" arrow>
                          <li>
                            <FaNodeJs className="nodejs" />
                          </li>
                        </LightTooltip>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 order-lg-2 col-lg-5">
              <div className="thumbnail">
                <div className="inner">
                  <LazyLoad>
                    <img src="images/about.png" alt="WapBorhan" />
                  </LazyLoad>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
