"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  FiHome,
  FiUser,
  FiLayers,
  FiUsers,
  FiMessageCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `header-style-2 d-block d-xl-none ${
    sticky ? "sticky" : ""
  }`;

  return (
    <div>
      {/* <!-- Header Mobile Bar  --> */}
      <div className={headerClasses}>
        <div className="row align-items-center">
          <div className="col-6">
            <div className="logo">
              <NextLink href="/">
                <img src="/images/logo/logo-dark.png" alt="WapBorhan-Logo" />
              </NextLink>
            </div>
          </div>
          <div className="col-6">
            <div className="header-right text-right">
              <div className="hamberger-menu" onClick={toggleMenu}>
                <i id="menuBtn" className="feather-menu humberger-menu">
                  <FiMenu />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start Popup Mobile Menu  --> */}
      <div className={`popup-mobile-menu ${isOpen ? "menu-open" : ""}`}>
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <div className="sr-hd">
                <div className="sr-logo">
                  <NextLink className="logo" href="/">
                    <img
                      src="/images/logo/logos-circle.png"
                      alt="Personal Portfolio"
                    />
                  </NextLink>
                </div>
                <div className="sr-content">
                  <p className="discription">WapBorhan</p>
                </div>
              </div>
              <div className="close-button" onClick={toggleMenu}>
                <button className="close-menu-activation close">
                  <i>
                    <FiX />
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills">
              <li className="nav-item">
                <ScrollLink
                  className="nav-link smoth-animation-two cursor-pointer"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  <i>
                    <FiHome />
                  </i>
                  {t("sidebar.nav1")}
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link smoth-animation-two cursor-pointer"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  <i>
                    <FiUser />
                  </i>
                  {t("sidebar.nav2")}
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link smoth-animation-two cursor-pointer"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  <i>
                    <FiLayers />
                  </i>
                  {t("sidebar.nav3")}
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link smoth-animation-two cursor-pointer"
                  activeClass="active"
                  to="whyme"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  <i>
                    <FiUsers />
                  </i>
                  {t("sidebar.nav4")}
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  className="nav-link smoth-animation-two cursor-pointer"
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                >
                  <i>
                    <FiMessageCircle />
                  </i>
                  {t("sidebar.nav6")}
                </ScrollLink>
              </li>
            </ul>

            {/* <!-- social share area --> */}
            <div className="social-share-style-1 mt--40">
              <span className="title">{t("sidebar.findWithMe")}</span>
              <ul className="social-share d-flex liststyle">
                <li className="facebook">
                  <a
                    href="https://facebook.com/infoborhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://www.instagram.com/wapborhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href="https://www.linkedin.com/in/wapborhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
    </div>
  );
};

export default MobileMenu;
