import React, { Component } from "react";
// import Javascript from "./Javascript";
import PortfolioDetails from "./PortfolioDetails";
import PORTFOLIO from "../../../../assets/data/portfolio";

export default class PortfolioS extends Component {
  state = {
    portfolio: PORTFOLIO,
  };

  render() {
    return (
      <div className="sr-content pt--30">
        <div className="container">
          <div className="sect-main">
            {/* <!-- Start Portfolio Area --> */}
            <div className="rn-portfolio-area " id="portfolio">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="section-title text-center"
                    >
                      <span className="subtitle">
                        Visit my portfolio and keep your feedback
                      </span>
                      <h2 className="title">My Project</h2>
                    </div>
                  </div>
                </div>

                <PortfolioDetails project={this.state.portfolio} />

                {/* <Javascript /> */}
              </div>
            </div>
            {/* <!-- End portfolio Area --> */}
          </div>
        </div>
      </div>
    );
  }
}
