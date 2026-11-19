"use client";

import React from "react";
import StrategyItem from "./StrategyItem";
import { useTranslation } from "react-i18next";

export default function Strategy() {
  const { t } = useTranslation();

  return (
    <div
      className="rn-strategy-area rn-section-gap section-separator"
      id="strategy"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span className="subtitle">{t("strategy.subheading")}</span>
              <h2 className="title">{t("strategy.heading")}</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10">
          <StrategyItem
            step={t("strategy.step1.step")}
            title={t("strategy.step1.title")}
            desc={t("strategy.step1.desc")}
            image="/images/process/process-01.png"
          />
          <StrategyItem
            step={t("strategy.step2.step")}
            title={t("strategy.step2.title")}
            desc={t("strategy.step2.desc")}
            image="/images/process/process-02.png"
          />
          <StrategyItem
            step={t("strategy.step3.step")}
            title={t("strategy.step3.title")}
            desc={t("strategy.step3.desc")}
            image="/images/process/process-03.png"
          />
        </div>
      </div>
    </div>
  );
}
