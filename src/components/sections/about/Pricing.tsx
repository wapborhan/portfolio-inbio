"use client";

import React from "react";
import PremiumPlan from "./PremiumPlan";
import StandardPlan from "./StandardPlan";
import StaticPlan from "./StaticPlan";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div
      className="rn-pricing-area rn-section-gap section-separator"
      id="pricing"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-5">
              <span className="subtitle">{t("pricing.subtitle")}</span>
              <h2 className="title">{t("pricing.title")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <StaticPlan />
          <StandardPlan />
          <PremiumPlan />
        </div>
      </div>
    </div>
  );
}
