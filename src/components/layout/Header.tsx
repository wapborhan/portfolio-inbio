"use client";

import React, { useState } from "react";
import SideBar from "./SideBar";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/images/logo/logo-vertical-dark.png"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav
                id="sideNav"
                className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav"
              >
                <SideBar />
              </nav>
              <div className="header-right">
                <div className="hamberger-menu d-block d-xl-none">
                  <i
                    id="menuBtn"
                    className="feather-menu humberger-menu cursor-pointer"
                    onClick={() => setIsMobileOpen(true)}
                  >
                    <FiMenu />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
