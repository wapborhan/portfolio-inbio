import React from "react";
import { ThemeColors } from "./ThemeContext";

interface ThemeTogglerProps {
  bgColor?: string;
  handleTheme: (color: string) => void;
}

export default function ThemeToggler(props: ThemeTogglerProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="fixed-plugin">
      <div>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <i className="fa fa-cog fa-2x" />
        </div>
        {dropdownOpen && (
          <ul className="dropdown-menu show" style={{ display: "block" }}>
            <li className="header-title">SELECT THEME</li>
            <li className="adjustments-line">
              <div className="div-colors text-center">
                <div
                  className={
                    props.bgColor === ThemeColors.primary ? "active" : ""
                  }
                  onClick={() => {
                    props.handleTheme(ThemeColors.primary);
                  }}
                />{" "}
                <div
                  className={props.bgColor === ThemeColors.blue ? "active" : ""}
                  onClick={() => {
                    props.handleTheme(ThemeColors.blue);
                  }}
                />{" "}
                <div
                  className={props.bgColor === ThemeColors.purple ? "active" : ""}
                  onClick={() => {
                    props.handleTheme(ThemeColors.purple);
                  }}
                />{" "}
                <div
                  className={props.bgColor === ThemeColors.orange ? "active" : ""}
                  onClick={() => {
                    props.handleTheme(ThemeColors.orange);
                  }}
                />{" "}
                <div
                  className={props.bgColor === ThemeColors.green ? "active" : ""}
                  onClick={() => {
                    props.handleTheme(ThemeColors.green);
                  }}
                />{" "}
                <div
                  className={props.bgColor === ThemeColors.red ? "active" : ""}
                  onClick={() => {
                    props.handleTheme(ThemeColors.red);
                  }}
                />{" "}
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
