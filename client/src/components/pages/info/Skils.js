import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  FaHtml5,
  FaCss3Alt,
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
  SiJquery,
  SiVisualstudiocode,
  SiXampp,
  SiAdobepremierepro,
  SiAdobexd,
  SiSketch,
  SiAdobeillustrator,
  SiCanva,
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
              <LightTooltip title="HTML" placement="top" arrow>
                <li>
                  <FaHtml5 className="html" />
                </li>
              </LightTooltip>

              <LightTooltip title="CSS" placement="top" arrow>
                <li>
                  <FaCss3Alt className="css" />
                </li>
              </LightTooltip>
              <LightTooltip title="JAVASCRIPT" placement="top" arrow>
                <li>
                  <FaJsSquare className="javascript" />
                </li>
              </LightTooltip>
              <LightTooltip title="REACT" placement="top" arrow>
                <li>
                  <FaReact className="react" />
                </li>
              </LightTooltip>
              <LightTooltip title="VUE" placement="top" arrow>
                <li>
                  <FaVuejs className="vue" />
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
              <LightTooltip title="NODE JS" placement="top" arrow>
                <li>
                  <FaNodeJs className="nodejs" />
                </li>
              </LightTooltip>
              <LightTooltip title="MONGODB" placement="top" arrow>
                <li>
                  <SiMongodb className="mongodb" />
                </li>
              </LightTooltip>
              {/* <LightTooltip title="MATERIAL UI" placement="top" arrow>
                <li>
                  <img src="images/icons/materialui.png" alt="Icons" />
                </li>
              </LightTooltip> */}
              <LightTooltip title="BOOTSTRAP" placement="top" arrow>
                <li>
                  <FaBootstrap className="bootstrap" />
                </li>
              </LightTooltip>
              <LightTooltip title="SASS" placement="top" arrow>
                <li>
                  <FaSass className="sass" />
                </li>
              </LightTooltip>
              <LightTooltip title="JQUARY" placement="top" arrow>
                <li>
                  <SiJquery className="jquery" />
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
            <span className="title">Graphical Skills</span>
            <ul className="skill-share d-flex liststyle">
              <LightTooltip title="PHOTOSHOP" placement="top" arrow>
                <li>
                  <SiAdobepremierepro className="ps" />
                </li>
              </LightTooltip>
              <LightTooltip title="ADOBE XD" placement="top" arrow>
                <li>
                  <SiAdobexd className="xd" />
                </li>
              </LightTooltip>
              <LightTooltip title="FIGMA" placement="top" arrow>
                <li>
                  <IoLogoFigma className="figma" />
                </li>
              </LightTooltip>
              <LightTooltip title="SKETCH" placement="top" arrow>
                <li>
                  <SiSketch className="sketch" />
                </li>
              </LightTooltip>
              <LightTooltip title="ILLUSTRATOR" placement="top" arrow>
                <li>
                  <SiAdobeillustrator className="ai" />
                </li>
              </LightTooltip>

              <LightTooltip title="CANVA" placement="top" arrow>
                <li>
                  <SiCanva className="canva" />
                </li>
              </LightTooltip>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
