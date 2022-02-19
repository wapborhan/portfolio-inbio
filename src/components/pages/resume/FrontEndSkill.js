import React, { useState } from "react";
const Progress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-bar" style={style}>
        <span className="percent-label">{done}%</span>
      </div>
    </div>
  );
};
export default function FrontEndSkill() {
  return (
    <div className="progress-wrapper">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-once="true"
        className="content"
      >
        <span className="subtitle">Features</span>
        <h4 className="maintitle">Front-End</h4>

        <div className="progress-charts">
          <h6 className="heading heading-h6">HTML</h6>
          <Progress done="93" />
        </div>
        <div className="progress-charts">
          <h6 className="heading heading-h6">CSS</h6>
          <Progress done="85" />
        </div>
        <div className="progress-charts">
          <h6 className="heading heading-h6">JAVASCRIPT</h6>
          <Progress done="65" />
        </div>
        <div className="progress-charts">
          <h6 className="heading heading-h6">React JS</h6>
          <Progress done="50" />
        </div>
        <div className="progress-charts">
          <h6 className="heading heading-h6">VUE JS</h6>
          <Progress done="25" />
        </div>
      </div>
    </div>
  );
}
