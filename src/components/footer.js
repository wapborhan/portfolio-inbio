import React from "react";

function Footer() {
  return (
    // Start Footer Area
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
                © 2021. All rights reserved by WapBorhan | Designer{" "}
                <a target="_blank" href="https://wapborhan.com">
                  Borhan Uddin
                </a>
                .{" "}
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
