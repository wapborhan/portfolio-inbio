import React from "react";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import ReactJS from "./ReactJS";
import Javascript from "./Javascript";
import Landing from "./Landing";
import Android from "./Android";

export default function RoutePortfolio(props) {
  console.log(props);
  return (
    <>
      <RouterHeader />
      <div className="sr-content pt--30">
        <div className="container">
          <div className="sect-main">
            <div className="rn-portfolio-area " id="portfolio">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span className="subtitle">
                        Visit my portfolio and keep your feedback
                      </span>
                      <h2 className="title">My Project</h2>
                    </div>
                  </div>
                </div>
                <ReactJS react={props.project.react} />
                <Javascript javascript={props.project.javascript} />
                <Landing landing={props.project.landingpage} />
                <Android project={props.project.apps} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RouterFooter />
    </>
  );
}
