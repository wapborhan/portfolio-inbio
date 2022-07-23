import React from "react";
import Skils from "./Skils";
import { FiUser } from "react-icons/fi";
import {
  FaCentos,
  FaRegEnvelope,
  FaPeriscope,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

class Info extends React.Component {
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
                                <FaRegUser />
                              </i>
                            </div>
                            <h2 className="title">
                              Hi, I am <span>Borhan</span>
                            </h2>
                          </div>
                          <p className="disc">
                            I am a web-developer. I like working with
                            JavaScript. Therefore I use React JS to make
                            stunning UI. I am ready to work with honesty,
                            dedication, sincerity, and confidence to adapt to
                            any situation to achieve my purpose.
                          </p>
                        </div>
                        <div className="user-info-footer">
                          <div className="info">
                            <FaCentos />
                            <span>
                              Founder & CEO{" "}
                              <a
                                href="http://www.srdreamlab.com"
                                target="_blank"
                              >
                                SR Dream Lab
                              </a>
                            </span>
                          </div>
                          <div className="info">
                            <FaRegEnvelope />
                            <span>
                              <a href="mailto:borhaninfos@gmail.com">
                                borhaninfos@gmail.com
                              </a>
                            </span>
                          </div>
                          <div className="info">
                            <FaPeriscope />
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
                          <Link className="rn-btn mr--30" to="/about">
                            <span>About More</span>
                          </Link>
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
                <Skils />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
