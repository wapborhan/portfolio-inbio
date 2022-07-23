import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BannerSocial from "./BannerSocial";
import LazyLoad from "react-lazyload";

export default function Banner() {
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <section
      id="home"
      className="slider-style-5  pb--110 align-items-center with-particles"
    >
      <div id="particles-js"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-inner">
              <div className="thumbnail gradient-border havatar gradient-animationz">
                <img
                  id="border"
                  className="gradient-border image gardnt"
                  src="images/banner.jpg"
                  alt=""
                />
                <span className="gradient-borders"></span>
              </div>
              <h1>Borhan Uddin</h1>
              {/* <!-- type headline start--> */}
              <span className="cd-headline clip is-full-width">
                <div class="info">
                  <i data-feather="file"></i>
                  <span>
                    Founder &amp; CEO{" "}
                    <a href="http://www.srdreamlab.com">SR Dream Lab</a>
                  </span>
                </div>
              </span>

              <div className="button-area">
                <BannerSocial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
