"use client";

import React from "react";
import ReactProjects from "./ReactProjects";
import JavascriptProjects from "./JavascriptProjects";
import LandingProjects from "./LandingProjects";
import { PortfolioData } from "@/types/project";
import { useTranslation } from "react-i18next";

export default function PortfolioContent({ data }: { data: PortfolioData }) {
  const { t } = useTranslation();

  return (
    <div className="sr-content pt--30">
      <div className="container">
        <div className="sect-main">
          <div className="rn-portfolio-area" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">
                      {t("portfolio.subheading")}
                    </span>
                    <h2 className="title">{t("portfolio.myProject")}</h2>
                  </div>
                </div>
              </div>
              <ReactProjects react={data.react} />
              <JavascriptProjects javascript={data.javascript} />
              <LandingProjects landing={data.landingpage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
