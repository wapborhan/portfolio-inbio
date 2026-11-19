"use client";

import React from "react";
import ContactUs from "./Form";
import LazyLoad from "@/components/common/LazyLoad";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div
      className="rn-contact-area rn-section-gap section-separator"
      id="contacts"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{t("contact.subheading")}</span>
              <h2 className="title">{t("contact.heading")}</h2>
            </div>
          </div>
        </div>
        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
          <div className="col-lg-5">
            <div className="contact-about-area">
              <div className="thumbnail">
                <LazyLoad>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.384878338166!2d88.95830402281295!3d24.02744201588017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea5e989a3df29%3A0xf5251011b08f158f!2z4KaP4Ka44KaG4KawIOCmrOCni-CmsOCmueCmvuCmqA!5e0!3m2!1sbn!2sbd!4v1629847093289!5m2!1sbn!2sbd"
                    width="460"
                    height="285"
                    style={{ border: "0" }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Map"
                  ></iframe>
                </LazyLoad>
              </div>
              <div className="title-area">
                <h4 className="title">{t("contact.title")}</h4>
                <span>{t("contact.designation")}</span>
              </div>
              <div className="description">
                <p>{t("contact.desc")}</p>
                <span className="phone">
                  {t("contact.whatsapp")}{" "}
                  <a href="https://api.whatsapp.com/send?phone=8801620557840&text=Hello">
                    +8801620557840
                  </a>
                </span>
                <span className="mail">
                  {t("contact.email")}{" "}
                  <a href="mailto:borhaninfos@gmail.com">
                    borhaninfos@gmail.com
                  </a>
                </span>
              </div>
              <div className="social-area">
                <div className="name">{t("contact.findWithMe")}</div>
                <div className="social-icone">
                  <ul className="social-share d-flex liststyle">
                    <li className="facebook">
                      <a href="http://facebook.com/infoborhan" target="_blank" rel="noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-facebook"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="https://www.instagram.com/wapborhan" target="_blank" rel="noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a href="https://www.linkedin.com/in/wapborhan/" target="_blank" rel="noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="600" className="col-lg-7 contact-input">
            <div className="contact-form-wrapper">
              <div className="introduce">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
