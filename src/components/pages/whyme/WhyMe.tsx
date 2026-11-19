"use client";

import React from "react";
import { FiLoader } from "react-icons/fi";
import { BsStopwatch } from "react-icons/bs";
import { FaRegCalendarAlt, FaAward } from "react-icons/fa";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function WhyMe() {
  const { t } = useTranslation();

  return (
    <div
      className="rn-service-area rn-section-gap section-separator"
      id="whyme"
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
              <span className="subtitle">
                {t("whyme.subheading")}
              </span>
              <h2 className="title">{t("whyme.heading")}</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10 justify-content-center">
          {/* <!-- Start Single Service --> */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-service">
              <div className="inner text-center">
                <div className="icon">
                  <BsStopwatch />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.service1.title")}</h4>
                  <p className="description">
                    {t("whyme.service1.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-service">
              <div className="inner text-center">
                <div className="icon ">
                  <FaAward />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.service2.title")}</h4>
                  <p className="description">
                    {t("whyme.service2.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-service">
              <div className="inner text-center">
                <div className="icon ">
                  <FaRegCalendarAlt />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.service3.title")}</h4>
                  <p className="description">
                    {t("whyme.service3.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <Link className="rn-btn" href="/whyme">
              {t("whyme.btn")}
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
