import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLocale } from "./translate/useLocale";

const darkMode = "darkMode";

function RightDemo() {
  const [isDark, setDark] = useState(localStorage.getItem(darkMode) === "true");
  const toggleDark = () => {
    const newValue = !isDark;
    setDark(newValue);
    localStorage.setItem(darkMode, newValue.toString());
    document.body.classList.toggle("white-version");
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("white-version");
    } else {
      document.body.classList.remove("white-version");
    }
  }, [isDark]);

  const [locale, setLocale] = useLocale();

  const handleToggleLocale = () => {
    setLocale(locale === "en" ? "bn" : "en");
  };

  const { t } = useTranslation();
  return (
    <>
      <div className="riht">
        <div className="rn-right-demo">
          <button className="demo-button" onClick={toggleDark}>
            <span className="text">{!isDark ? <FaSun /> : <FaMoon />}</span>
          </button>

          <button
            className="demo-button rightdemo2"
            onClick={handleToggleLocale}
          >
            {locale === "en" ? (
              <svg viewBox="0 0 7410 3900">
                <rect fill="#bf0a30" width="7410" height="3900" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="white"
                  strokeWidth="300"
                />
                <rect fill="#002868" width="2964" height="2100" />
                <g id="18★">
                  <g id="9★">
                    <g id="5★">
                      <g id="4★">
                        <path
                          id="★"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          fill="white"
                        />
                        <use href="#★" y="420" />
                        <use href="#★" y="840" />
                        <use href="#★" y="1260" />
                      </g>
                      <use href="#★" y="1680" />
                    </g>
                    <use href="#4★" x="247" y="210" />
                  </g>
                  <use href="#9★" x="494" />
                </g>
                <use href="#18★" x="988" />
                <use href="#9★" x="1976" />
                <use href="#5★" x="2470" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
                <rect width="1200" height="800" fill="#006a4e" />
                <path d="M0,0h400v800H0Z" fill="#006a4e" />
                <path d="M800,0h400v800H800Z" fill="#006a4e" />
                <circle cx="600" cy="400" r="280" fill="#f42a41" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default RightDemo;
