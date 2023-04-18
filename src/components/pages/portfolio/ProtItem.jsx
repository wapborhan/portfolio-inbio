import React, { Component, Fragment } from "react";
import LazyLoad from "react-lazyload";
import Modal from "./Modal";

export default class ProtItem extends Component {
  render() {
    const reactdata = this.props.react.map((item) => {
      return (
        <Fragment>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
            style={{ cursor: "pointer" }}
            key={item.id}
            onClick={this.props.handleShow}
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
          </div>{" "}
          <Modal
            show={this.props.show}
            onHide={this.props.onHide}
            project={item}
          />
        </Fragment>
      );
    });
    return <Fragment>{reactdata}</Fragment>;
  }
}
