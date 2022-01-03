import React from "react";

function Info() {
  return (
    <div id="home" className="rn-slide-area">
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
                            <i data-feather="user"></i>
                          </div>
                          <h2 className="title">
                            Hi, I am <span>Borhan</span>
                          </h2>
                        </div>
                        {/* <!-- type headline start--> */}
                        <span className="cd-headline clip is-full-width">
                          <span>Web</span>
                          {/* <!-- ROTATING TEXT --> */}
                          <span className="cd-words-wrapper">
                            <b className="is-visible">Designer.</b>
                            <b className="is-hidden">Developer.</b>
                            <b className="is-hidden">App Developer.</b>
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
                            <a href="http://www.codestrickz.xyz">CodesTrickZ</a>
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
                      <span>Download my curriculum vitae: </span>
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
                <div className="havatar thumbnail-image img-container--gradient">
                  <img
                    id="border"
                    className="image gardnt"
                    src="images/slider/banner-02.png"
                    alt="Personal Portfolio"
                  />
                </div>
                <span className="gradient-borders"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
