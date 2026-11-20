"use client";

import React from "react";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import ReactJS from "./ReactJS";
import Javascript from "./Javascript";
import Landing from "./Landing";
import { useTranslation } from "react-i18next";
import Android from "./Android";

interface RoutePortfolioProps {
  project?: {
    react?: any[];
    javascript?: any[];
    landingpage?: any[];
    apps?: any[];
  };
}

export default function RoutePortfolio(props: RoutePortfolioProps) {
  const { t } = useTranslation();
  const project = props.project || {};

  return (
    <>
      <RouterHeader />
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
                <ReactJS react={project.react} />
                <Javascript javascript={project.javascript} />
                <Landing landing={project.landingpage} />
                <Android project={project.apps} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RouterFooter />
    </>
  );
}
