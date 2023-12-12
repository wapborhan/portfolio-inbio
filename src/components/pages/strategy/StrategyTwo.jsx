import React from "react";
import Sta from "./Sta";
import "./strategy.css";
import { useTranslation } from "react-i18next";

const StrategyTwo = () => {
  const { t } = useTranslation();
  return (
    <div
      className="rn-service-area rn-section-gap section-separator"
      id="features"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span className="subtitle">{t("strategy.subheading")}</span>
              <h2 className="title  mb-5">{t("strategy.heading")}</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10 justify-content-center ">
          <div className="col-lg-12">
            <Sta />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyTwo;
