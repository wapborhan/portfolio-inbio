import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaSun, FaMoon } from "react-icons/fa";

function RightDemo() {
  const [isDark, setDark] = useState();

  const toggleDark = () => {
    setDark(!isDark);
    document.body.classList.toggle("white-version");
  };

  return (
    <>
      <div className="riht">
        <div className="rn-right-demo">
          <Button className="demo-button" onClick={toggleDark}>
            <span className="text">{!isDark ? <FaSun /> : <FaMoon />}</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default RightDemo;
