import React from "react";
import SideBar from "./SideBar";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <div className="header">
      <SideBar />
      <MobileMenu />
    </div>
  );
}

export default Header;
