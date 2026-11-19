"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Progress = ({ done }: { done: string | number }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle({
        opacity: 1,
        width: `${done}%`,
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [done]);

  return (
    <div className="progress">
      <div className="progress-bar" style={style}>
        <span className="percent-label">{done}%</span>
      </div>
    </div>
  );
};

export default function BackEndSkill() {
  const { t } = useTranslation();

  return (
    <div className="progress-wrapper">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-once="true"
        className="content"
      >
        <span className="subtitle">{t("resume.features")}</span>
        <h4 className="maintitle">{t("resume.backend")}</h4>

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
