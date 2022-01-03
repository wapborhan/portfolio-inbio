import React from "react";
import Slider from "react-slick";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";

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
                    <img
                      src="images/portfolio/portfolio-01.jpg"
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
                            <i>
                              <FiGithub />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://code.wapborhan.com/github-users/"
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
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#exampleModalCenter-1"
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
                    <img
                      src="images/portfolio/portfolio-02.jpg"
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
                            <i>
                              <FiGithub />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="http://code.wapborhan.com/calculator/"
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
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#exampleModalCenter-2"
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
                      Calculators<i className="feather-arrow-up-right"></i>
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
                  <a href="javascript:void(0)">
                    <img
                      src="images/portfolio/portfolio-03.jpg"
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
                            <i>
                              <FiGithub />
                            </i>
                          </a>
                        </div>
                        <div>
                          <a
                            href="http://code.wapborhan.com/todo/"
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
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#exampleModalCenter-3"
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
                                                <span><a href="javascript:void(0)"><i className="feather-heart"></i></a>
                                                    630</span>--> */}
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
          {/* <!-- End Single Portfolio --> */}
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <a className="rn-btn" href="more/portfolio/index.html">
              See More{" "}
              <i className="feather-loader">
                <FiLoader />
              </i>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- modal area --> */}
      {/* <!-- 1st Modal Portfolio Body area /Start --> */}
      <div
        className="modal fade"
        id="exampleModalCenter-1"
        tabIndex="-1"
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
                  {/* <!-- End of .text-content --> */}
                </div>
              </div>
              {/* <!-- End of .row Body--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 1st End Modal Portfolio area --> */}

      {/* <!-- 2nd Modal Portfolio Body area Start --> */}
      <div
        className="modal fade"
        id="exampleModalCenter-2"
        tabIndex="-1"
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
                  {/* <!-- End of .text-content --> */}
                </div>
              </div>
              {/* <!-- End of .row Body--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 2nd End Modal Portfolio area --> */}

      {/* <!-- 3rd Modal Portfolio Body area Start --> */}
      <div
        className="modal fade"
        id="exampleModalCenter-3"
        tabIndex="-1"
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
                  {/* <!-- End of .text-content --> */}
                </div>
              </div>
              {/* <!-- End of .row Body--> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- 3rd End Modal Portfolio area --> */}
      {/* <!-- modal area End --> */}
    </div>
  );
}

export default Portfolio;
