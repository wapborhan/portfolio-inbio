import React from "react";

function Info() {
  return (
    <div id="home" class="rn-slide-area">
      <div class="slide slider-style-3">
        <div id="particles-js"></div>
        <div class="container">
          <div class="row slider-wrapper">
            <div class="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
              <div class="slider-info">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12">
                    <div class="user-info-top">
                      <div class="user-info-header">
                        <div class="sr-user">
                          <div class="user">
                            <i data-feather="user"></i>
                          </div>
                          <h2 class="title">
                            Hi, I am <span>Borhan</span>
                          </h2>
                        </div>
                        {/* <!-- type headline start--> */}
                        <span class="cd-headline clip is-full-width">
                          <span>Web</span>
                          {/* <!-- ROTATING TEXT --> */}
                          <span class="cd-words-wrapper">
                            <b class="is-visible">Designer.</b>
                            <b class="is-hidden">Developer.</b>
                            <b class="is-hidden">App Developer.</b>
                          </span>
                        </span>
                        {/* <!-- type headline end --> */}
                        <p class="disc">
                          Develop a passion for learning. If you do, you will
                          never cease to grow.
                        </p>
                      </div>
                      <div class="user-info-footer">
                        <div class="info">
                          <i data-feather="file"></i>
                          <span>
                            Developer{" "}
                            <a href="http://www.codestrickz.xyz">CodesTrickZ</a>
                          </span>
                        </div>
                        <div class="info">
                          <i data-feather="mail"></i>
                          <span>
                            <a href="mailto:borhaninfos@gmail.com">
                              borhaninfos@gmail.com
                            </a>
                          </span>
                        </div>
                        <div class="info">
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

                  <div class="col-xl-12 col-lg-12 col-12">
                    <div class="user-info-bottom">
                      <span>Download my curriculum vitae: </span>
                      <div class="button-wrapper d-flex">
                        <a class="rn-btn mr--30" href="more/cv.html">
                          <span>DOWNLOAD CV</span>
                        </a>
                        <a class="rn-btn" href="#contacts">
                          <span>CONTACT ME</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-1 order-xl-2 col-lg-12 col-xl-7">
              <div class="background-image-area srpd">
                <div class="havatar thumbnail-image img-container--gradient">
                  <img
                    id="border"
                    class="image gardnt"
                    src="assets/images/slider/banner-02.png"
                    alt="Personal Portfolio"
                  />
                </div>
                <span class="gradient-borders"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
