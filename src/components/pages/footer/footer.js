import React from "react";
import LazyLoad from "react-lazyload";

function Footer() {
  return (
    // Start Footer Area
    <div className="rn-footer-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a href="/">
                  <LazyLoad>
                    <img
                      src="images/logo/logo-vertical-dark.png"
                      alt="Wapborhan-Footer_logo"
                    />
                  </LazyLoad>
                </a>
              </div>

              <p className="description mt--30">
                © 2022. All rights reserved by{" "}
                <a target="_blank" href="https://wapborhan.com">
                  WapBorhan
                </a>
                . | Design BY <a href="https://srdreamlab.com/">SR Dream Lab</a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // End Footer Area
  );
}

export default Footer;
