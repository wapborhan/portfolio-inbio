"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { FiHome, FiBriefcase, FiLayers, FiUsers, FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const { t } = useTranslation();

  return (
    <ul className="primary-menu">
      <li className="nav-item current">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <FiHome className="feather feather-home" />
          <span>{t("sidebar.home")}</span>
        </ScrollLink>
      </li>
      <li className="nav-item">
        <Link href="/about">
          <FiUsers className="feather feather-users" />
          <span>{t("sidebar.about")}</span>
        </Link>
      </li>
      <li className="nav-item">
        <ScrollLink
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <FiBriefcase className="feather feather-briefcase" />
          <span>{t("sidebar.portfolio")}</span>
        </ScrollLink>
      </li>
      <li className="nav-item">
        <ScrollLink
          to="strategy"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <FiLayers className="feather feather-layers" />
          <span>{t("sidebar.process")}</span>
        </ScrollLink>
      </li>
      <li className="nav-item">
        <ScrollLink
          to="whyme"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <FiUsers className="feather feather-users" />
          <span>{t("sidebar.whyme")}</span>
        </ScrollLink>
      </li>
      <li className="nav-item">
        <ScrollLink
          to="contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <FiMail className="feather feather-mail" />
          <span>{t("sidebar.contact")}</span>
        </ScrollLink>
      </li>
    </ul>
  );
}
