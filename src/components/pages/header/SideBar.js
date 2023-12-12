import React from "react";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiUsers,
  // FiShoppingCart,
  FiImage,
  FiMessageSquare,
  FiMessageCircle,
  FiDownload,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t } = useTranslation();
  return (
    <div className="d-none d-xl-block header-style-2">
      <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
        <div className="logo-area">
          <NavLink to="/">
            <img src="images/logo/logo-06.png" alt="WapBorhan-logo" />
          </NavLink>
        </div>
        <nav id="sideNavs" className="mainmenu-nav navbar-example2">
          <ul className="primary-menu nav nav-pills">
            <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="home"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiHome />
                </i>
                {t("sidebar.nav1")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="about"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiUser />
                </i>
                {t("sidebar.nav2")}
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="features"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiBriefcase />
                </i>
                Features
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="portfolio"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiLayers />
                </i>
                {t("sidebar.nav3")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="whyme"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiUsers />
                </i>
                {t("sidebar.nav4")}
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link smoth-animation-two" href="#pricing">
                <i>
                  <FiShoppingCart />
                </i>
                Pricing
              </a>
            </li> */}
            {/* <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="blog"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiImage />
                </i>
                {t("sidebar.nav5")}
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="testimonial"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiMessageSquare />
                </i>
                Testimonial
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link smoth-animation-two"
                activeClass="active"
                to="contacts"
                spy={true}
                // smooth={true}
              >
                <i>
                  <FiMessageCircle />
                </i>
                {t("sidebar.nav6")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer">
          <div className="social-share-style-1  mt--30">
            <span className="title">{t("sidebar.social")}</span>
            <ul className="social-share d-flex liststyle">
              <li className="facebook" style={{ width: "100%" }}>
                <a
                  href="/"
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
