import React from "react";
import BackEndSkill from "./BackEndSkill";
// import CodingActivity from "./CodingActivity";
import FrontEndSkill from "./FrontEndSkill";

function Resume() {
  return (
    <div
      className="rn-resume-area rn-section-gap section-separator"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">2+ Years of Experience</span>
              <h2 className="title">My Skills</h2>
            </div>
          </div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <div className="rn-nav-content tab-content" id="myTabContents">
              <div
                className="tab-pane fade show active fade single-tab-area"
                id="professional"
                role="tabpanel"
                aria-labelledby="professional-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row row--40">
                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <FrontEndSkill />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      {/* <BackEndSkill /> */}
                      <BackEndSkill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
