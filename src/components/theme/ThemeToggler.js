import React from "react";
// importing the required reactstrap components
// import { Dropdown, DropdownToggle, div } from "reactstrap";
import { ThemeColors } from "./ThemeContext";

function ThemeToggler(props) {
  const [dropdownOpen, setdropdownOpen] = React.useState(false);
  const handleClick = () => {
    setdropdownOpen(!dropdownOpen);
  };
  return (
    <div className="fixed-plugin">
      <div isOpen={dropdownOpen} toggle={handleClick}>
        <div tag="div">
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu show">
          <li className="header-title">SELECT THEME</li>
          <li className="adjustments-line">
            <div className="div-colors text-center">
              <div
                color="primary"
                className={
                  props.bgColor === ThemeColors.primary ? "active" : ""
                }
                onClick={() => {
                  props.handleTheme(ThemeColors.primary);
                }}
              />{" "}
              <div
                color="info"
                className={props.bgColor === ThemeColors.blue ? "active" : ""}
                onClick={() => {
                  props.handleTheme(ThemeColors.blue);
                }}
              />{" "}
              <div
                color="info"
                className={props.bgColor === ThemeColors.purple ? "active" : ""}
                onClick={() => {
                  props.handleTheme(ThemeColors.purple);
                }}
              />{" "}
              <div
                color="info"
                className={props.bgColor === ThemeColors.orange ? "active" : ""}
                onClick={() => {
                  props.handleTheme(ThemeColors.orange);
                }}
              />{" "}
              <div
                color="success"
                className={props.bgColor === ThemeColors.green ? "active" : ""}
                onClick={() => {
                  props.handleTheme(ThemeColors.green);
                }}
              />{" "}
              <div
                color="success"
                className={props.bgColor === ThemeColors.red ? "active" : ""}
                onClick={() => {
                  props.handleTheme(ThemeColors.red);
                }}
              />{" "}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ThemeToggler;
