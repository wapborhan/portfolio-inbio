import React, { useLayoutEffect, useState, useRef } from "react";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiUsers,
  // FiShoppingCart,
  FiImage,
  FiMessageSquare,
  FiMessageCircle,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const [isOpen, setIsopen] = useState(false);

  const MobileMenu = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-style-2 d-block d-xl-none ${
    sticky && check ? "sticky" : ""
  }`;
  const { clientHeight } = ref;

  const checkChange = (value) => {
    setCheck(value);
  };

  function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);

    const handleScroll = () => {
      setStick(window.scrollY > offset);
    };

    useLayoutEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

    return stick;
  }

  return (
    <div>
      {/* <!-- Header Mobile Bar  --> */}
      <div
        ref={ref}
        className={headerClasses}
        // className="header-style-2 d-block d-xl-none"
      >
        <div className="row align-items-center">
          <div className="col-6">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo/logo-dark.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="header-right text-right">
              <div className="hamberger-menu" onClick={MobileMenu}>
                <i id="menuBtn" className="feather-menu humberger-menu">
                  <FiMenu />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Mobile Bar  --> */}
      {/* <!-- Start Popup Mobile Menu  --> */}
      <div className={`popup-mobile-menu ${isOpen == true ? "menu-open" : ""}`}>
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <div className="sr-hd">
                <div className="sr-logo">
                  <a className="logo" href="index.html">
                    <img
                      src="images/logo/logos-circle.png"
                      alt="Personal Portfolio"
                    />
                  </a>
                </div>
                <div className="sr-content">
                  <p className="discription">WapBorhan</p>
                </div>
              </div>
              <div className="close-button" onClick={MobileMenu}>
                <button className="close-menu-activation close">
                  <i data-feather="x">
                    <FiX />
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills">
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="home"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiHome />
                  </i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="about"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiUser />
                  </i>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="features"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiBriefcase />
                  </i>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiLayers />
                  </i>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="resume"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiUsers />
                  </i>
                  Skils
                </Link>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link smoth-animation-two" href="#pricing">
                <i>
                  <FiShoppingCart />
                </i>
                Pricing
              </a>
            </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="blog"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiImage />
                  </i>
                  blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="testimonial"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiMessageSquare />
                  </i>
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link smoth-animation-two"
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  onClick={MobileMenu}
                  // smooth={true}
                >
                  <i>
                    <FiMessageCircle />
                  </i>
                  Contact
                </Link>
              </li>
            </ul>
            {/* <!-- social sharea area --> */}
            <div className="social-share-style-1 mt--40">
              <span className="title">find with me</span>
              <ul className="social-share d-flex liststyle">
                <li className="facebook">
                  <a href="http://facebook.com/infoborhan">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/wapborhan">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/wapborhan/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- end --> */}
          </div>
        </div>
      </div>

      {/* <!-- End Popup Mobile Menu  --> */}
    </div>
  );
};

export default MobileMenu;
