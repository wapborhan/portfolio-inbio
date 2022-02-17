import React from "react";

export default function Banner() {
  return (
    <section
      id="home"
      className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles"
    >
      <div id="particles-js">
        {/* <canvas
          className="particles-js-canvas-el"
          style="width: 100%; height: 100%;"
          width="1537"
          height="955"
        ></canvas> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-inner">
              <div className="thumbnail gradient-border gradient-animation">
                <img
                  id="border"
                  className="gradient-border"
                  src="assets/images/slider/banner-06.png"
                  alt=""
                />
              </div>
              <h1>Al-Amin Bali</h1>
              {/* <!-- type headline start--> */}
              <span className="cd-headline clip is-full-width">
                {/* <span>I am a</span> */}
                {/* <!-- ROTATING TEXT --> */}
                {/* <span className="cd-words-wrapper" style="width: 166.275px;">
                  <b className="is-hidden">Lawyer.</b>
                  <b className="is-hidden">Consulter.</b>
                  <b className="is-visible">Developer.</b>
                </span> */}
              </span>
              {/* <!-- type headline end --> */}
              <div className="button-area">
                <a className="rn-btn" href="#contacts">
                  <span>CONTACT ME</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
