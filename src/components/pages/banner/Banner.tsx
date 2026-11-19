"use client";
import React from "react";
import BannerSocial from "./BannerSocial";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="slider-style-5 pb--110 align-items-center with-particles"
    >
      <div id="particles-js"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-inner">
              <div className="thumbnail gradient-border havatar gradient-animationz">
                <img
                  id="border"
                  className="gradient-border image gardnt"
                  src="/images/banner.jpg"
                  alt="Banner"
                />
                <span className="gradient-borders"></span>
              </div>
              <h1> {t("banner.name")}</h1>
              <span className="cd-headline clip is-full-width">
                <div className="info">
                  <i data-feather="file"></i>
                  <span>{t("banner.position")} </span>
                </div>
              </span>

              <div className="button-area">
                <BannerSocial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Banner };
