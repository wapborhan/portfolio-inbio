"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { FaReact, FaNodeJs, FaWordpressSimple } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { useTranslation } from "react-i18next";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(255, 1, 79)",
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 700,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(255, 1, 79)",
  },
}));

export default function BannerSocial() {
  const { t } = useTranslation();

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
        <div className="social-share-inner-left">
          <span className="title">{t("sidebar.findWithMe")}</span>
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
      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
        <div className="skill-share-inner">
          <span className="title">{t("about.tech.h2")}</span>
          <ul className="skill-share d-flex liststyle justify-content-left">
            <LightTooltip title="REACT" placement="top" arrow>
              <li>
                <FaReact className="react" />
              </li>
            </LightTooltip>
            <LightTooltip title="NODE JS" placement="top" arrow>
              <li>
                <FaNodeJs className="nodejs" />
              </li>
            </LightTooltip>
            <LightTooltip title="WORDPRESS" placement="top" arrow>
              <li>
                <FaWordpressSimple className="wordpress" />
              </li>
            </LightTooltip>
            <LightTooltip title="MONGODB" placement="top" arrow>
              <li>
                <SiMongodb className="mongodb" />
              </li>
            </LightTooltip>
          </ul>
        </div>
      </div>
    </div>
  );
}
