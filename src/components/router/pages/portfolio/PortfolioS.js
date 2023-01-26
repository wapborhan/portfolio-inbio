import React, { Component } from "react";
import axios from "axios";
// import Javascript from "./Javascript";
import ReactJS from "./ReactJS";
import Javascript from "./Javascript";
import Landing from "./Landing";
import Android from "./Android";
import REACT from "../../../../assets/data/ReactData";
import JAVASCRIPT from "../../../../assets/data/JavascriptData";
import LANDING_PAGE from "../../../../assets/data/LandingData";
import ANDROID from "../../../../assets/data/AndroidData";

export default class PortfolioS extends Component {
  state = {
    react: REACT,
    javascript: JAVASCRIPT,
    landing: LANDING_PAGE,
    android: ANDROID,
    data: null,
  };

  // componentDidMount() {
  //   axios
  //     .get(`https://srdreamlab-e981b-default-rtdb.firebaseio.com/react.json`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       this.setState({ react: res.data });
  //     });
  // }

  render() {
    // console.log(this.state.react);

    this.state.react.map((item) => {
      console.log(item);
    });

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

                {/* <ReactJS project={this.state.react} /> */}

                <Javascript project={this.state.javascript} />

                <Landing project={this.state.landing} />

                <Android project={this.state.android} />
              </div>
            </div>
            {/* <!-- End portfolio Area --> */}
          </div>
        </div>
      </div>
    );
  }
}
