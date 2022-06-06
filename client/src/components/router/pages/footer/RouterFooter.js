import React from "react";
import BackToTop from "../../../BacktoTop";
import RightDemo from "../../../RightDemo";

export default function RouterFooter() {
  return (
    <div className="rn-footer-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo/logo-vertical-dark.png" alt="logo" />
                </a>
              </div>
              <p className="description mt--30">
                © 2022. All rights reserved by{" "}
                <a target="_blank" href="https://wapborhan.com">
                  WapBorhan
                </a>
                . | Design BY{" "}
                <a href="https://srdreamlab.netlify.app/">SR Dream Lab</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
      <RightDemo />
    </div>
  );
}
