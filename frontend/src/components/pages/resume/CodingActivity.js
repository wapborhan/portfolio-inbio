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
export default function CodingActivity() {
  return (
    <div className="progress-wrapper">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-once="true"
        className="content"
      >
        <span className="subtitle">Laguage</span>
        <h4 className="maintitle">Coding Activity</h4>

        <a href="https://wakatime.com/@wapborhan">
          <embed src="https://wakatime.com/share/@wapborhan/84a9caf8-937b-4521-93a5-50125971af0f.svg"></embed>
        </a>
      </div>
    </div>
  );
}
