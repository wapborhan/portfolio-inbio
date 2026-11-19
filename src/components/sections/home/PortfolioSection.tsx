"use client";

import React from "react";
import PortfolioItem from "./PortfolioItem";
import { FiLoader } from "react-icons/fi";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ProjectItem } from "@/types/project";

interface PortfolioSectionProps {
  react?: ProjectItem[];
}

export default function PortfolioSection({ react = [] }: PortfolioSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
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
              <span className="subtitle">{t("portfolio.subheading")}</span>
              <h2 className="title">{t("portfolio.heading")}</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
          {react.slice(0, 6).map((item) => (
            <PortfolioItem key={item.id} data={item} />
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <Link className="rn-btn" href="/portfolio">
              {t("portfolio.btn")}
              <i className="feather-loader ms-3">
                <FiLoader />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
