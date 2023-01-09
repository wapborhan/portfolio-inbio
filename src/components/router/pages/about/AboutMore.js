import React from "react";
import RouterHeader from "../header/RouterHeader";
// import RouterFooter from "../footer/RouterFooter";
import AboutS from "./AboutS";
import Resume from "./resume/Resume";
import Social from "./social/Social";
import Pricing from "./price/Pricing";
// import Code from "./code/Code";
import { Contact, Footer, Testimonials } from "../../../pages/AllPages";
import BacktoTop from "../../../BacktoTop";
import RightDemo from "../../../RightDemo";

export default function AboutMore() {
  return (
    <>
      <RouterHeader />
      <AboutS />
      <Resume />
      {/* <Code /> */}
      <Pricing />
      <Testimonials />
      <Social />
      <Contact />
      <BacktoTop />
      <RightDemo />
      <Footer />
    </>
  );
}
