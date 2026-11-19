"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";
import {
  FaPhp,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaWordpressSimple,
  FaGithubSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiXampp,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiBrackets, DiTerminal } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";

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

export default function Skils() {
  const { t } = useTranslation();
  return (
    <div className="background-image-area srpd">
      <div className="rn-skill-area section-height">
        <div className="inner slide skills">
          <h5 className="title"> {t("about.tech.h1")}</h5>
          <div className="skill-share-inner ">
            <span className="title">{t("about.tech.h2")}</span>
            <ul className="skill-share d-flex liststyle justify-content-left">
              <LightTooltip title="MONGODB" placement="top" arrow>
                <li>
                  <SiMongodb className="mongodb" />
                </li>
              </LightTooltip>
              <LightTooltip title="EXPRESS" placement="top" arrow>
                <li>
                  <SiExpress className="express" />
                </li>
              </LightTooltip>
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
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">{t("about.tech.h3")}</span>
            <ul className="skill-share d-flex liststyle">
              <LightTooltip title="JavaScript" placement="top" arrow>
                <li>
                  <SiJavascript className="javascript" />
                </li>
              </LightTooltip>
              <LightTooltip title="VUE" placement="top" arrow>
                <li>
                  <FaVuejs className="vue" />
                </li>
              </LightTooltip>
              <LightTooltip title="PHP" placement="top" arrow>
                <li>
                  <FaPhp className="php" />
                </li>
              </LightTooltip>
              <LightTooltip title="WORDPRESS" placement="top" arrow>
                <li>
                  <FaWordpressSimple className="wordpress" />
                </li>
              </LightTooltip>
              <LightTooltip title="React Native" placement="top" arrow>
                <li>
                  <RiReactjsLine className="react" />
                </li>
              </LightTooltip>
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">{t("about.tech.h4")}</span>
            <ul className="skill-share d-flex liststyle">
              <LightTooltip title="VSCODE" placement="top" arrow>
                <li>
                  <VscVscode className="vscode" />
                </li>
              </LightTooltip>
              <LightTooltip title="BRACKETS" placement="top" arrow>
                <li>
                  <DiBrackets className="brackets" />
                </li>
              </LightTooltip>
              <LightTooltip title="GITHUB" placement="top" arrow>
                <li>
                  <FaGithubSquare className="github" />
                </li>
              </LightTooltip>
              <LightTooltip title="GIT" placement="top" arrow>
                <li>
                  <FaGitAlt className="git" />
                </li>
              </LightTooltip>
              <LightTooltip title="TERMINAL" placement="top" arrow>
                <li>
                  <DiTerminal className="terminal" />
                </li>
              </LightTooltip>
              <LightTooltip title="XAMPP" placement="top" arrow>
                <li>
                  <SiXampp className="xampp" />
                </li>
              </LightTooltip>
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">{t("about.tech.h5")}</span>
            <ul className="skill-share d-flex liststyle">
              <LightTooltip title="BOOTSTRAP" placement="top" arrow>
                <li>
                  <FaBootstrap className="bootstrap" />
                </li>
              </LightTooltip>
              <LightTooltip title="TAILWIND CSS" placement="top" arrow>
                <li>
                  <SiTailwindcss className="tailwindcss" />
                </li>
              </LightTooltip>
              <LightTooltip title="SASS" placement="top" arrow>
                <li>
                  <FaSass className="sass" />
                </li>
              </LightTooltip>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
