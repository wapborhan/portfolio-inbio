import React from "react";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import AboutS from "./AboutS";
import Resume from "./resume/Resume";
import Pricing from "./price/Pricing";
import { Code, Contact, Testimonials } from "../../../pages/AllPages";

export default function AboutMore() {
  return (
    <>
      <RouterHeader />
      <AboutS />
      <Resume />
      <Code />
      <Pricing />
      <Testimonials />
      <Contact />
      <RouterFooter />
    </>
  );
}
