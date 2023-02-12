import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

function Portfolio(props) {
  const reactdata = props.react.map((item) => {
    console.log(item);
    return (
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="true"
        className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
        key={item.id}
      >
        <div className="rn-portfolio">
          <div className="inner">
            <div className="thumbnail">
              <a>
                <LazyLoad>
                  <img src={item.image} alt={item.name} />
                </LazyLoad>
              </a>
            </div>
            <div className="content">
              <div className="category-info">
                <div className="category-list">
                  <a>{item.language}</a>
                </div>
                <div className="meta">
                  <span>
                    <a href="#">
                      <i className="feather-heart"></i>
                    </a>
                    600
                  </span>
                </div>
              </div>
              <h4 className="title">
                <a>{item.name}</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  });
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
          {reactdata}
        </div>
        <Modal />
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
      {/* <div className="meta">
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
                </div> */}
    </div>
  );
}

export default Portfolio;
