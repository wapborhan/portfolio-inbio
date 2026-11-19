"use client";

import React from "react";
import BannerSocial from "./BannerSocial";
import LazyLoad from "@/components/common/LazyLoad";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t, i18n } = useTranslation();

  const handleDone = () => {};
  const handleType = (_count: number) => {};

  const typewriterWords =
    i18n.language === "bn"
      ? [
          "ফ্রন্ট-এন্ড ডেভেলপার।",
          "ওয়ার্ডপ্রেস ডেভেলপার।",
          "অ্যাপ ডেভেলপার।",
        ]
      : [
          "Front-End Developer.",
          "Wordpress Developer.",
          "App Developer.",
        ];

  return (
    <div id="home" className="rn-slide-area">
      <div className="slide slider-style-1">
        <div className="container">
          <div className="row row--30 align-items-center">
            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="content">
                <div className="inner">
                  <span className="subtitle">{t("banner.subtitle")}</span>
                  <h1 className="title">
                    {t("banner.greeting")} <span>{t("banner.name")}</span>
                    <br />
                    <span className="header-caption" id="page-top">
                      <span className="cd-headline clip is-full-width">
                        <span>{t("banner.whoAmI")} </span>
                        <span className="cd-words-wrapper">
                          <b className="is-visible ms-3">
                            <Typewriter
                              words={typewriterWords}
                              loop={true}
                              cursor
                              cursorStyle="|"
                              typeSpeed={70}
                              deleteSpeed={50}
                              delaySpeed={1000}
                              onLoopDone={handleDone}
                              onType={handleType}
                            />
                          </b>
                        </span>
                      </span>
                    </span>
                  </h1>

                  <div>
                    <p className="description">{t("banner.desc")}</p>
                  </div>
                </div>
                <BannerSocial />
              </div>
            </div>

            <div className="order-1 order-lg-2 col-lg-5">
              <div className="thumbnail">
                <div className="inner">
                  <LazyLoad>
                    <img src="/images/banner.jpg" alt="Personal Portfolio Images" />
                  </LazyLoad>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
