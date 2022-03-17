import React from "react";
import Premium from "./Premium";
import Standard from "./Standard";

import Static from "./Static";

function Pricing() {
  return (
    <div
      className="rn-pricing-area rn-section-gap section-separator"
      id="pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5">
              <span className="subtitle">Pricing</span>
              <h2 className="title">My Pricing</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Static />
          <Standard />
          <Premium />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
