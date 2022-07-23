import React from "react";
import {
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiActivity,
} from "react-icons/fi";

export default function Static() {
  return (
    <div className="col-lg-4">
      <div className="navigation-wrapper">
        <ul className="nav " id="myTab" role="tablist">
          <li className="nav-item ">
            <a className="nav-style" id="test-tab">
              Static
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="profile">
            {/* <!-- Pricing Start --> */}
            <div className="rn-pricing">
              <div className="pricing-header">
                <div className="header-left">
                  <h2 className="title">Price</h2>
                  <span>Elementor</span>
                </div>
                <div className="header-right">
                  <span>$50.00</span>
                </div>
              </div>
              <div className="pricing-body">
                <p className="description">
                  Making this the first true generator on the Internet. It uses
                  a dictionary & plugin Development.
                </p>
                <div className="check-wrapper">
                  <div className="left-area">
                    <div className="check d-flex">
                      <i>
                        <FiCheckCircle />
                      </i>
                      <p>1 Page with Elementor</p>
                    </div>
                    <div className="check d-flex">
                      <i>
                        <FiCheckCircle />
                      </i>
                      <p>Design Customization</p>
                    </div>
                    <div className="check d-flex">
                      <i>
                        <FiCheckCircle />
                      </i>
                      <p>Responsive Design</p>
                    </div>
                    <div className="check d-flex">
                      <i>
                        <FiCheckCircle />
                      </i>
                      <p>Content Upload</p>
                    </div>
                    <div className="check d-flex">
                      <i>
                        <FiCheckCircle />
                      </i>
                      <p>Design Customization</p>
                    </div>
                    <div className="check d-flex">
                      <i>
                        <FiCheckCircle />
                      </i>
                      <p>2 Plugins/Extensions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-footer">
                <a href="#" className="rn-btn d-block">
                  <span>ORDER NOW</span>
                  <i>
                    <FiArrowRight />
                  </i>
                </a>
                <div className="time-line d-flex">
                  <div className="single-cmt d-flex">
                    <i>
                      <FiClock />
                    </i>
                    <span>2 Days Delivery</span>
                  </div>
                  <div className="single-cmt d-flex">
                    <i>
                      <FiActivity />
                    </i>
                    <span>Unlimited Revission</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End --> */}
          </div>
        </div>
      </div>
      {/* <!-- End --> */}
    </div>
  );
}
