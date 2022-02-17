import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  const handleType = (count) => {
    // access word count number
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
              <div className="thumbnail gradient-border havatar gradient-animationz">
                <img
                  id="border"
                  className="gradient-border image gardnt"
                  src="banner.jpg"
                  alt=""
                />
                <span className="gradient-borders"></span>
              </div>
              <h1>Borhan Uddin</h1>
              {/* <!-- type headline start--> */}
              <span className="cd-headline clip is-full-width">
                <span className="cd-words-wrapper">
                  <Typewriter
                    words={[
                      "Front-End Developer.",
                      "Wordpress Developer.",
                      "App Developer.",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
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
