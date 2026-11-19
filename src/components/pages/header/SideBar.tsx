"use client";
import React from "react";
import {
  FiHome,
  FiUser,
  FiLayers,
  FiUsers,
  FiMessageCircle,
  FiDownload,
} from "react-icons/fi";
import NextLink from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t } = useTranslation();
  return (
    <div className="d-none d-xl-block header-style-2">
      <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
        <div className="logo-area">
          <NextLink href="/">
            <img src="/images/logo/logo-06.png" alt="WapBorhan-logo" />
          </NextLink>
        </div>
        <nav id="sideNavs" className="mainmenu-nav navbar-example2">
          <ul className="primary-menu nav nav-pills">
            <li className="nav-item">
              <ScrollLink
                className="nav-link smoth-animation-two cursor-pointer"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
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
              >
                <i>
                  <FiMessageCircle />
                </i>
                {t("sidebar.nav6")}
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="footer">
          <div className="social-share-style-1 mt--30">
            <span className="title">{t("sidebar.social")}</span>
            <ul className="social-share d-flex liststyle">
              <li className="facebook" style={{ width: "100%" }}>
                <a
                  href="/images/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%" }}
                >
                  <FiDownload style={{ height: "2.5em", width: "2.5em" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
