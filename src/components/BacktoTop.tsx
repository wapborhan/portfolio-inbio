"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const BacktoTop = ({ showBelow = 250 }: { showBelow?: number }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showBelow) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBelow]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="to top"
      style={{
        zIndex: 999,
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#ff014f",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        color: "#fff",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 15px -4px #444444b8",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      className="back-to-top-btn"
    >
      <FiArrowUp />
    </button>
  );
};

export default BacktoTop;
