"use client";

import React from "react";
import {
  MdSecurity,
  MdSentimentSatisfiedAlt,
  MdSupportAgent,
  MdSpeed,
  MdOutlineContactPage,
  MdOutlineWatchLater,
} from "react-icons/md";
import {
  FaLaptopCode,
  FaRegCalendarAlt,
  FaAward,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WhyMeDetails() {
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
          {/* Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <MdOutlineWatchLater />
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

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <FaLaptopCode />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.details.hardWorking.title")}</h4>
                  <p className="description">
                    {t("whyme.details.hardWorking.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
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

          {/* Card 4 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
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

          {/* Card 5 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <MdSecurity />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.details.security.title")}</h4>
                  <p className="description">
                    {t("whyme.details.security.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <MdSentimentSatisfiedAlt />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.details.satisfaction.title")}</h4>
                  <p className="description">
                    {t("whyme.details.satisfaction.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <MdSupportAgent />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.details.afterSupport.title")}</h4>
                  <p className="description">
                    {t("whyme.details.afterSupport.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <MdSpeed />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.details.speed.title")}</h4>
                  <p className="description">
                    {t("whyme.details.speed.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 9 */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="why-me">
              <div className="inner text-center">
                <div className="icon ">
                  <MdOutlineContactPage />
                </div>
                <div className="content">
                  <h4 className="title">{t("whyme.details.contactForm.title")}</h4>
                  <p className="description">
                    {t("whyme.details.contactForm.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
