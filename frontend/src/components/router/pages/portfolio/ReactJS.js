import React from "react";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";

export default function ReactJS() {
  return (
    <div>
      {/* <!-- Project Tittle Start -->/ */}
      <div className="row">
        <div className="col-md-8">
          <div className="catt-title">
            <h3>
              Some <span className="txt-success">Projects</span> I've Build By
            </h3>
            <div className="text-right">
              <a
                className="rn-btn btn-brd mr--30"
                href="more/portfolio/javascript.html"
              >
                <span>React</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

      <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
        {/* <!-- Start Single Portfolio --> */}
        <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
          data-aos-once="true"
          className="col-lg-6 col-xl-3 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
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
                    <h3 className="pro-cat">Development</h3>
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
                    Github User Finder
                    <i className="feather-arrow-up-right"></i>
                  </a>
                </h4>
                <p className="tags mt-3">
                  <span className="javascript">Javascript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Portfolio --> */}

        {/* <!-- Start Single Portfolio --> */}
        <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
          data-aos-once="true"
          className="col-lg-6 col-xl-3 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
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
                    <h3 className="pro-cat">DEVELOPMENT</h3>
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
                    Calculetor
                    <i className="feather-arrow-up-right"></i>
                  </a>
                </h4>
                <p className="tags mt-3">
                  <span className="javascript">Javascript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Portfolio --> */}

        {/* <!-- Start Single Portfolio --> */}
        <div
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
          data-aos-once="true"
          className="col-lg-6 col-xl-3 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
        >
          <div
            className="rn-portfolio"
            data-toggle="modal"
            data-target="#exampleModalCenter-3"
          >
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img
                    src="images/portfolio/portfolio-03.jpg"
                    alt="Personal Portfolio Images"
                  />
                </a>
              </div>
              <div className="content">
                <div className="category-info">
                  <div className="category-list">
                    <h3 className="pro-cat">DEVELOPMENT</h3>
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
                    Todo List
                    <i className="feather-arrow-up-right"></i>
                  </a>
                </h4>
                <p className="tags mt-3">
                  <span className="javascript">Javascript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Portfolio --> */}

        {/* <!-- Start Single Portfolio --> */}
        <div
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
          data-aos-once="true"
          className="col-lg-6 col-xl-3 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
        >
          <div
            className="rn-portfolio"
            data-toggle="modal"
            data-target="#exampleModalCenter-3"
          >
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img
                    src="images/portfolio/portfolio-03.jpg"
                    alt="Personal Portfolio Images"
                  />
                </a>
              </div>
              <div className="content">
                <div className="category-info">
                  <div className="category-list">
                    <h3 className="pro-cat">DEVELOPMENT</h3>
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
                    Todo List
                    <i className="feather-arrow-up-right"></i>
                  </a>
                </h4>
                <p className="tags mt-3">
                  <span className="javascript">Javascript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Portfolio --> */}
      </div>
    </div>
  );
}
