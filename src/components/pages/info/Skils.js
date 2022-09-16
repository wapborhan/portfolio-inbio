import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  FaPhp,
  FaJsSquare,
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
  SiVisualstudiocode,
  SiXampp,
  SiTailwindcss,
  SiExpress,
  SiMaterialui,
} from "react-icons/si";
import { DiBrackets, DiTerminal } from "react-icons/di";
import { IoLogoFigma } from "react-icons/io5";

const LightTooltip = styled(({ className, ...props }) => (
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
  return (
    <div className="background-image-area srpd">
      <div className="rn-skill-area section-height">
        <div className="inner slide skills">
          <h5 className="title">About My Skill</h5>
          <div className="skill-share-inner ">
            <span className="title">Primary Skills on</span>
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

              {/* <LightTooltip title="TYPESCRIPT" placement="top" arrow>
                <li>
                  <img src="images/icons/ts.png" alt="Icons Images" />
                </li>
              </LightTooltip>
              <LightTooltip title="ANGULAR" placement="top" arrow>
                <li>
                  <img src="images/icons/angular.png" alt="Icons Images" />
                </li>
              </LightTooltip> */}
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">Secondary Skills on</span>
            <ul className="skill-share d-flex liststyle">
              <LightTooltip title="VUE" placement="top" arrow>
                <li>
                  <FaVuejs className="vue" />
                </li>
              </LightTooltip>
              <LightTooltip title="VUE" placement="top" arrow>
                <li>
                  <FaPhp className="php" />
                </li>
              </LightTooltip>

              <LightTooltip title="WORDPRESS" placement="top" arrow>
                <li>
                  <FaWordpressSimple className="wordpress" />
                </li>
              </LightTooltip>
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">Tools I Used</span>
            <ul className="skill-share d-flex liststyle">
              <LightTooltip title="VSCODE" placement="top" arrow>
                <li>
                  <SiVisualstudiocode className="vscode" />
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
            <span className="title">CSS Framework</span>
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
              <LightTooltip title="MATERIAL UI" placement="top" arrow>
                <li>
                  <SiMaterialui className="materialui" />
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
