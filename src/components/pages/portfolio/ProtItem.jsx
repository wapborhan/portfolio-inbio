import React, { Component, Fragment } from "react";
import LazyLoad from "react-lazyload";
import Modal from "./Modal";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";

export default class ProtItem extends Component {
  render() {
    const reactdata = this.props.react.map((item) => {
      return (
        <Fragment>
          {/* <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
            style={{ cursor: "pointer" }}
            key={item.id}
            // onClick={this.props.handleShow}
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
          </div> */}
          <div
            key={item.id}
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-portfolio">
              <div className="inner">
                <div className="thumbnail">
                  <a>
                    <img src={item.image} alt="Personal Portfolio Images" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title mb-3">{item.name}</h4>
                  <div className="d-flex justify-content-between">
                    <div className="tags m-0 mb-4">
                      <span className={item.language}>{item.language}</span>
                    </div>
                    <div className="meta">
                      <div className="card-btn-container d-flex justify-content-end">
                        <a
                          href={item.source_link}
                          className="btn card-btn"
                          title="Source Code"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={item.live_link}
                          className="btn card-btn"
                          title="Live"
                        >
                          <FiExternalLink />
                        </a>
                        <a
                          href={item.about_link}
                          className="btn card-btn"
                          title="Details"
                        >
                          <FiEye />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Modal
            show={this.props.show}
            onHide={this.props.onHide}
            project={item}
          /> */}
        </Fragment>
      );
    });
    return <Fragment>{reactdata}</Fragment>;
  }
}
