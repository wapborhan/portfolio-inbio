import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

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
            <ul className="skill-share d-flex liststyle justify-content-center">
              <LightTooltip title="HTML" placement="top" arrow>
                <li>
                  <img src="images/icons/html.png" alt="Icons Images" />{" "}
                </li>
              </LightTooltip>

              <LightTooltip title="CSS" placement="top" arrow>
                <li>
                  <img src="images/icons/css.png" alt="Icons Images" />
                </li>
              </LightTooltip>
              <LightTooltip title="JAVASCRIPT" placement="top" arrow>
                <li>
                  <img src="images/icons/js.png" alt="Icons Images" />
                </li>
              </LightTooltip>
              <LightTooltip title="REACT JS" placement="top" arrow>
                <li>
                  <img src="images/icons/react.png" alt="Icons Images" />
                </li>
              </LightTooltip>
              <LightTooltip title="VUE JS" placement="top" arrow>
                <li>
                  <img src="images/icons/vue.png" alt="Icons Images" />
                </li>
              </LightTooltip>
              <LightTooltip title="TYPESCRIPT" placement="top" arrow>
                <li>
                  <img src="images/icons/ts.png" alt="Icons Images" />
                </li>
              </LightTooltip>
              <LightTooltip title="ANGULAR" placement="top" arrow>
                <li>
                  <img src="images/icons/angular.png" alt="Icons Images" />
                </li>
              </LightTooltip>
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">Secondary Skills on</span>
            <ul className="skill-share d-flex liststyle">
              <li>
                <img src="images/icons/nodejs.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/mongodb.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/materialui.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/bootstrap.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/sass.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/jquary.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/wordpress.png" alt="Icons" />
              </li>
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">Tools I Used</span>
            <ul className="skill-share d-flex liststyle">
              <li>
                <img src="images/icons/vscode.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/brackets.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/github.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/git.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/terminal.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/xaamp.png" alt="Icons" />
              </li>
            </ul>
          </div>
          <div className="skill-share-inner skill-share-inner-width margin-top-25">
            <span className="title">Graphical Skills</span>
            <ul className="skill-share d-flex liststyle">
              <li>
                <img src="images/icons/ps.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/xd.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/figma.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/sketch.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/illustrator.png" alt="Icons" />
              </li>
              <li>
                <img src="images/icons/pr.png" alt="Icons" />
              </li>{" "}
              <li>
                <img src="images/icons/canva.png" alt="Icons" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
