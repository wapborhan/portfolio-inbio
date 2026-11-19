"use client";

import React from "react";
import Skills from "./Skills";
import Link from "next/link";
import { FiLoader } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Info() {
  const { t } = useTranslation();

  return (
    <div className="section-separator pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="rn-about-area" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="section-title text-left mt-5"
                    >
                      <span className="subtitle">{t("about.subtitle")}</span>
                      <h2 className="title">{t("about.title")}</h2>
                    </div>
                    <div className="about-text">
                      <p>{t("about.desc")}</p>
                      <div className="col-lg-12 mt-5 text-left">
                        <Link className="rn-btn" href="/about">
                          {t("about.btn")}
                          <i className="feather-loader ms-3">
                            <FiLoader />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
