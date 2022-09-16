import React from "react";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

function Portfolio() {
  return (
    <div
      className="rn-portfolio-area rn-section-gap section-separator"
      id="portfolio"
    >
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

        <div className="row row--25 mt--10 mt_md--10 mt_sm--10 justify-content-center">
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-portfolio">
              <div className="inner">
                <div className="thumbnail">
                  <a>
                    <LazyLoad>
                      <img
                        src="images/portfolio/alquranbd.PNG"
                        alt="AlquranBD"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="tags mt-3">
                      <span className="react">React</span>
                    </div>
                    <div className="meta">
                      <div className="card-btn-container d-flex">
                        <div>
                          <a
                            href="https://islambd.netlify.app/about"
                            className="btn card-btn"
                            title="Source Code"
                          >
                            <i>
                              <FiGithub />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://islambd.netlify.app/"
                            className="btn card-btn"
                            title="Live"
                          >
                            <i className="feather-external-link">
                              <FiExternalLink />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            className="btn card-btn"
                            href="https://islambd.netlify.app/about"
                            title="Details"
                          >
                            <i className="feather-eye">
                              <FiEye />
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="title">
                    <a>
                      IslamBD
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}

          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-portfolio">
              <div className="inner">
                <div className="thumbnail">
                  <a>
                    <LazyLoad>
                      <img
                        src="images/portfolio/portfolio-01.jpg"
                        alt="Github"
                      />
                    </LazyLoad>
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <p className="tags mt-3">
                        <span className="react">React</span>
                      </p>
                    </div>
                    <div className="meta">
                      <div className="card-btn-container d-flex">
                        <div>
                          <a
                            href="https://github.com/wapborhan/github-users-react"
                            className="btn card-btn"
                            title="Source Code"
                          >
                            <i>
                              <FiGithub />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://code.wapborhan.com/github-users-react/"
                            className="btn card-btn"
                            title="Live"
                          >
                            <i className="feather-external-link">
                              <FiExternalLink />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/wapborhan/github-users-react/blob/main/README.md"
                            className="btn card-btn"
                            title="Details"
                          >
                            <i className="feather-eye">
                              <FiEye />
                            </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="title">
                    <a>
                      Github User Finder
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}

          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="rn-portfolio">
              <div className="inner">
                <div className="thumbnail">
                  <a>
                    <LazyLoad>
                      <img src="images/portfolio/portfolio-03.jpg" alt="ToDo" />
                    </LazyLoad>
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <p className="tags mt-3">
                        <span className="react">React</span>
                      </p>
                    </div>
                    <div className="meta">
                      <div className="card-btn-container d-flex">
                        <div>
                          <a
                            href="https://github.com/wapborhan/todo-react"
                            className="btn card-btn"
                            title="Source Code"
                          >
                            <i>
                              <FiGithub />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://code.wapborhan.com/todo-react/"
                            className="btn card-btn"
                            title="Live"
                          >
                            <i className="feather-external-link">
                              <FiExternalLink />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/wapborhan/todo-react/blob/main/README.md"
                            className="btn card-btn"
                            title="Details"
                          >
                            <i className="feather-eye">
                              <FiEye />
                            </i>
                          </a>
                        </div>
                      </div>
                      {/* <!--
                                                <span><a ><i className="feather-heart"></i></a>
                                                    630</span>--> */}
                    </div>
                  </div>
                  <h4 className="title">
                    <a>
                      Todo List
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <Link className="rn-btn" to="portfolio">
              See More{" "}
              <i className="feather-loader fa-pulse">
                <FiLoader className="fab-pulse fab-fw" />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
