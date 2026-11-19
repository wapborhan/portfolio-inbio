"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <div className={`popup-mobile-menu ${isOpen ? "menu-open" : ""}`}>
      <div className="inner">
        <div className="menu-top">
          <div className="menu-header">
            <Link className="logo" href="/" onClick={onClose}>
              <img src="/images/logo/logo-vertical-dark.png" alt="WapBorhan" />
            </Link>
            <div className="close-button">
              <button
                className="close-menu-activation close"
                onClick={onClose}
                aria-label="Close menu"
              >
                <FiX />
              </button>
            </div>
          </div>
          <p className="discription">{t("banner.subtitle")}</p>
        </div>
        <div className="content">
          <ul className="primary-menu">
            <li>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={onClose}
              >
                {t("sidebar.home")}
              </ScrollLink>
            </li>
            <li>
              <Link href="/about" onClick={onClose}>
                {t("sidebar.about")}
              </Link>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={onClose}
              >
                {t("sidebar.portfolio")}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="strategy"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={onClose}
              >
                {t("sidebar.process")}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="whyme"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={onClose}
              >
                {t("sidebar.whyme")}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contacts"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={onClose}
              >
                {t("sidebar.contact")}
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
