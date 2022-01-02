import React from "react";
import ReactDOM from "react-dom";

function Main() {
  return (
    <div className="main">
      <div className="main-page-wrapper">
        <div className="rn-header-image-area">
          <div className="bg_image--9 bg_image h-100"></div>
        </div>
        <div className="rn-content-wrapper">
          <div className="container">
            <div className="row padding-tb m_dec-top align-items-center d-flex">
              <div className="col-lg-6">
                <div className="header-left">
                  <div className="header-thumbnail">
                    <img
                      src="assets/images/logo/banner-02.png"
                      alt="personal_portfolio"
                    />
                  </div>
                  <div className="header-info-content">
                    <h4 className="title">Borhan Uddin</h4>
                    <div className="status-info">I am a Web Developer</div>
                    // social sharea area -
                    <div className="social-share-style-1 border-none mt--40">
                      <ul className="social-share d-flex liststyle">
                        <li className="facebook">
                          <a href="http://www.facebook.com/infoborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-facebook"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="http://www.instagram.com/wapborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                          <a href="http://linkedin.com/in/wapborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                    // end
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-right">
                  // Start skiull area
                  <div className="skill-area section-height skill-main">
                    <div className="inner slide">
                      <div className="skill-share-inner ">
                        <span className="title">Primary Skills on</span>
                        <ul className="skill-share d-flex liststyle">
                          <li>
                            <img
                              src="assets/images/icons/html.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/icons/css.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/icons/js.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/icons/react.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/icons/vue.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/icons/ts.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li>
                            <img
                              src="assets/images/icons/angular.png"
                              alt="Icons Images"
                            />
                          </li>
                        </ul>
                      </div>

                      {/* <div className="skill-share-inner skill-share-inner-width mt-5">
                                    <span className="title">Secondary Skills on</span>
                                    <ul className="skill-share d-flex liststyle">
                                        <li><img src="../../assets/images/icons/icons-11.png" alt="Icons Images"></li>
                                    </ul>
                                </div> */}
                    </div>
                  </div>
                  // End skiull area
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sr-content pt--30">
        <div className="container">
          <div className="sect-main">
            // Start Portfolio Area
            <div className="rn-portfolio-area " id="portfolio">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="section-title text-center"
                    >
                      <span className="subtitle">
                        Visit my portfolio and keep your feedback
                      </span>
                      <h2 className="title">My Portfolio</h2>
                    </div>
                  </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                  // Start Single Portfolio
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div className="rn-portfolio">
                      <div className="inner">
                        <div className="thumbnail">
                          <a>
                            <img
                              src="assets/images/portfolio/portfolio-01.jpg"
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">Development</a>
                            </div>
                            <div className="meta">
                              <div className="card-btn-container d-flex">
                                <div>
                                  <a
                                    href="https://github.com/wapborhan/github-users"
                                    className="btn card-btn"
                                    title="Source Code"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-github"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://code.wapborhan.com/github-users/"
                                    className="btn card-btn"
                                    title="Live"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-external-link"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter-1"
                                    className="btn card-btn"
                                    title="Details"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-eye"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="title">
                            <a>
                              Github User's Finder
                              <i className="feather-arrow-up-right"></i>
                            </a>
                          </h4>
                          <p className="tags mt-3">
                            <span className="html">Html</span>
                            <span className="css">Css</span>
                            <span className="javascript">Javascript</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  // End Single Portfolio //Start Single Portfolio
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div className="rn-portfolio">
                      <div className="inner">
                        <div className="thumbnail">
                          <a>
                            <img
                              src="assets/images/portfolio/portfolio-02.jpg"
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">Development</a>
                            </div>
                            <div className="meta">
                              <div className="card-btn-container d-flex">
                                <div>
                                  <a
                                    href="https://github.com/wapborhan/calculator"
                                    className="btn card-btn"
                                    title="Source Code"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-github"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="http://code.wapborhan.com/calculator/"
                                    className="btn card-btn"
                                    title="Live"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-external-link"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter-2"
                                    className="btn card-btn"
                                    title="Details"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-eye"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="title">
                            <a>
                              Calculators
                              <i className="feather-arrow-up-right"></i>
                            </a>
                          </h4>
                          <p className="tags mt-3">
                            <span className="html">Html</span>
                            <span className="css">Css</span>
                            <span className="javascript">Javascript</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  // End Single Portfolio // Start Single Portfolio
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div className="rn-portfolio">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src="assets/images/portfolio/portfolio-03.jpg"
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">Development</a>
                            </div>
                            <div className="meta">
                              <div className="card-btn-container d-flex">
                                <div>
                                  <a
                                    href="https://github.com/wapborhan/todo"
                                    className="btn card-btn"
                                    title="Source Code"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-github"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="http://code.wapborhan.com/todo/"
                                    className="btn card-btn"
                                    title="Live"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-external-link"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter-3"
                                    className="btn card-btn"
                                    title="Details"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-eye"
                                    ></i>
                                  </a>
                                </div>
                              </div>

                              {/* <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                                    630</span> */}
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="javascript:void(0)">
                              Todo List
                              <i className="feather-arrow-up-right"></i>
                            </a>
                          </h4>
                          <p className="tags mt-3">
                            <span className="html">Html</span>
                            <span className="css">Css</span>
                            <span className="javascript">Javascript</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  // End Single Portfolio // Start Single Portfolio
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div
                      className="rn-portfolio"
                      data-toggle="modal"
                      data-target="#exampleModalCenter-4"
                    >
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src="assets/images/portfolio/portfolio-04.jpg"
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">Design</a>
                            </div>
                            <div className="meta">
                              <div className="card-btn-container d-flex">
                                <div>
                                  <a
                                    href="#"
                                    className="btn card-btn"
                                    title="Source Code"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-github"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="https://code.wapborhan.com/html-template/headp/"
                                    className="btn card-btn"
                                    title="Live"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-external-link"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter-4"
                                    className="btn card-btn"
                                    title="Details"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-eye"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="javascript:void(0)">
                              HeadP<i className="feather-arrow-up-right"></i>
                            </a>
                          </h4>
                          <p className="tags mt-3">
                            <span className="html">Html</span>
                            <span className="css">Css</span>
                            <span className="javascript">Javascript</span>
                            <span className="react">React</span>
                            <span className="vue">Vue</span>
                            <span className="typescript">Typescript</span>
                            <span className="angular">Angular</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  // End Single Portfolio // Start Single Portfolio
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div
                      className="rn-portfolio"
                      data-toggle="modal"
                      data-target="#exampleModalCenter-5"
                    >
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src="assets/images/portfolio/portfolio-05.jpg"
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">Application</a>
                            </div>
                            <div className="meta">
                              <div className="card-btn-container d-flex">
                                <div>
                                  <a
                                    href="#"
                                    className="btn card-btn"
                                    title="Source Code"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-github"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="btn card-btn"
                                    title="Live"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-external-link"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter-5"
                                    className="btn card-btn"
                                    title="Details"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-eye"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="javascript:void(0)">
                              Mobile app landing design & app maintain
                              <i className="feather-arrow-up-right"></i>
                            </a>
                          </h4>
                          <p className="tags mt-3">
                            <span className="html">Html</span>
                            <span className="css">Css</span>
                            <span className="javascript">Javascript</span>
                            <span className="react">React</span>
                            <span className="vue">Vue</span>
                            <span className="typescript">Typescript</span>
                            <span className="angular">Angular</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  // End Single Portfolio // Start Single Portfolio
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-once="true"
                    className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
                  >
                    <div
                      className="rn-portfolio"
                      data-toggle="modal"
                      data-target="#exampleModalCenter-6"
                    >
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="javascript:void(0)">
                            <img
                              src="assets/images/portfolio/portfolio-06.jpg"
                              alt="Personal Portfolio Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <a href="javascript:void(0)">Photoshop</a>
                            </div>
                            <div className="meta">
                              <div className="card-btn-container d-flex">
                                <div>
                                  <a
                                    href="#"
                                    className="btn card-btn"
                                    title="Source Code"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-github"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="#"
                                    className="btn card-btn"
                                    title="Live"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-external-link"
                                    ></i>
                                  </a>
                                </div>
                                <div>
                                  <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter-6"
                                    className="btn card-btn"
                                    title="Details"
                                  >
                                    <i
                                      data-brackets-id="11286"
                                      className="feather-eye"
                                    ></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href="javascript:void(0)">
                              Logo design creativity & Application
                              <i className="feather-arrow-up-right"></i>
                            </a>
                          </h4>
                          <p className="tags mt-3">
                            <span className="html">Html</span>
                            <span className="css">Css</span>
                            <span className="javascript">Javascript</span>
                            <span className="react">React</span>
                            <span className="vue">Vue</span>
                            <span className="typescript">Typescript</span>
                            <span className="angular">Angular</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  // End Single Portfolio
                </div>
              </div>
            </div>
            // End portfolio Area
          </div>
        </div>
      </div>
      // Start Footer Area
      <div className="rn-footer-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo/logo-vertical-dark.png"
                      alt="logo"
                    />
                  </a>
                </div>

                <p className="description mt--30">
                  © 2021. All rights reserved by WapBorhan | Designer{" "}
                  <a target="_blank" href="https://wapborhan.com">
                    Borhan Uddin
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      // End Footer Area // Back to top Start
      <div className="backto-top">
        <div>
          <i data-feather="arrow-up"></i>
        </div>
      </div>
      // Back to top end // Start Right Demo
      <div className="rn-right-demo">
        <button className="demo-button">
          <span className="text">
            <i className="feather-share-2"></i>
          </span>
        </button>
      </div>
      // End Right Demo // Start Modal Area
      <div className="demo-modal-area">
        <div className="wrapper">
          <div className="close-icon">
            <button className="demo-close-btn">
              <span className="feather-x"></span>
            </button>
          </div>
          <div className="rn-modal-inner">
            <div className="demo-top text-center">
              <h4 className="title">WapBorhan</h4>
              <p className="subtitle">My All Social Links</p>
            </div>

            <div className="tab-content" id="popuptabContent">
              <div
                className="tab-pane show active"
                id="demodark"
                role="tabpanel"
                aria-labelledby="demodark-tab"
              >
                <div className="content">
                  <div className="row">
                    <div className="sr-social  align-self-center">
                      <ul className="justify-content-center">
                        <li className="linkedin">
                          <a href="https://www.linkedin.com/in/wapborhan/">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-linkedin"
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                        </li>
                        <li className="facebook">
                          <a href="http://www.facebook.com/infoborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-facebook"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </a>
                        </li>
                        <li className="instagram">
                          <a href="https://www.instagram.com/wapborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
                        <li className="twitter">
                          <a href="https://www.twitter.com/wapborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </a>
                        </li>
                        <li className="github">
                          <a href="https://github.com/wapborhan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane"
                id="demolight"
                role="tabpanel"
                aria-labelledby="demolight-tab"
              >
                <div className="content">
                  <div className="row">White</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // End Modal Area // Modal Portfolio Body area Start // Modal 1 start
      <div
        className="modal fade"
        id="exampleModalCenter-1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i data-feather="x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-popup-thumbnail">
                    <div className="image">
                      <img
                        className="w-100"
                        src="assets/images/portfolio/portfolio-01.jpg"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="text-content">
                    <h3>
                      <span>Featured - Design</span> App Design Development.
                    </h3>
                    <p className="mb--30">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate distinctio assumenda explicabo veniam
                      temporibus eligendi.
                    </p>
                    <p>
                      Consectetur adipisicing elit. Cupiditate distinctio
                      assumenda. dolorum alias suscipit rerum maiores aliquam
                      earum odit, nihil culpa quas iusto hic minus!
                    </p>
                    <div className="button-group mt--20">
                      <a href="#" className="rn-btn thumbs-icon">
                        <span>LIKE THIS</span>
                        <i data-feather="thumbs-up"></i>
                      </a>
                      <a href="#" className="rn-btn">
                        <span>VIEW PROJECT</span>
                        <i data-feather="chevron-right"></i>
                      </a>
                    </div>
                  </div>
                  // End of .text-content
                </div>
              </div>
              // End of .row Body
            </div>
          </div>
        </div>
      </div>
      // Modal 1 end // Modal 2 start
      <div
        className="modal fade"
        id="exampleModalCenter-2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i data-feather="x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-popup-thumbnail">
                    <div className="image">
                      <img
                        className="w-100"
                        src="assets/images/portfolio/portfolio-02.jpg"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="text-content">
                    <h3>
                      <span>Featured - Design</span> App Design Development.
                    </h3>
                    <p className="mb--30">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate distinctio assumenda explicabo veniam
                      temporibus eligendi.
                    </p>
                    <p>
                      Consectetur adipisicing elit. Cupiditate distinctio
                      assumenda. dolorum alias suscipit rerum maiores aliquam
                      earum odit, nihil culpa quas iusto hic minus!
                    </p>
                    <div className="button-group mt--20">
                      <a href="#" className="rn-btn thumbs-icon">
                        <span>LIKE THIS</span>
                        <i data-feather="thumbs-up"></i>
                      </a>
                      <a href="#" className="rn-btn">
                        <span>VIEW PROJECT</span>
                        <i data-feather="chevron-right"></i>
                      </a>
                    </div>
                  </div>
                  // End of .text-content
                </div>
              </div>
              // End of .row Body
            </div>
          </div>
        </div>
      </div>
      // Modal 2 end // Modal 3 start
      <div
        className="modal fade"
        id="exampleModalCenter-3"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i data-feather="x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="portfolio-popup-thumbnail">
                    <div className="image">
                      <img
                        className="w-100"
                        src="assets/images/portfolio/portfolio-03.jpg"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="text-content">
                    <h3>
                      <span>Featured - Design</span> App Design Development.
                    </h3>
                    <p className="mb--30">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate distinctio assumenda explicabo veniam
                      temporibus eligendi.
                    </p>
                    <p>
                      Consectetur adipisicing elit. Cupiditate distinctio
                      assumenda. dolorum alias suscipit rerum maiores aliquam
                      earum odit, nihil culpa quas iusto hic minus!
                    </p>
                    <div className="button-group mt--20">
                      <a href="#" className="rn-btn thumbs-icon">
                        <span>LIKE THIS</span>
                        <i data-feather="thumbs-up"></i>
                      </a>
                      <a href="#" className="rn-btn">
                        <span>VIEW PROJECT</span>
                        <i data-feather="chevron-right"></i>
                      </a>
                    </div>
                  </div>
                  // End of .text-content
                </div>
              </div>
              // End of .row Body
            </div>
          </div>
        </div>
      </div>
      // Modal 3 end // End Modal Portfolio area
    </div>
  );
}

export default Main;
