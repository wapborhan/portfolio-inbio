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
export default function BackEndSkill() {
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
        <h4 className="maintitle">Back-End</h4>

        <div className="progress-charts">
          <h6 className="heading heading-h6">Express</h6>
          <Progress done="35" />
        </div>
        <div className="progress-charts">
          <h6 className="heading heading-h6">PHP</h6>
          <Progress done="25" />
        </div>
        <div className="progress-charts">
          <h6 className="heading heading-h6">NODEJS</h6>
          <Progress done="35" />
        </div>
      </div>
    </div>
  );
}
