"use client";

import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <div className="backto-top">
      <div>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            zIndex: 999,
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "none",
            border: "none",
            cursor: "pointer",
            outline: "none",
            padding: 0,
          }}
        >
          <div className="btn card-btn">
            <FiArrowUp />
          </div>
        </button>
      </div>
    </div>
  );
}
