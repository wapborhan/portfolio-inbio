"use client";

import React from "react";
import RouterHeader from "../header/RouterHeader";
import AboutS from "./AboutS";
import Resume from "./resume/Resume";
import Social from "./social/Social";
import Pricing from "./price/Pricing";
import Contact from "@/components/pages/contact/Contact";
import Footer from "@/components/pages/footer/footer";
import Testimonials from "@/components/pages/testimonials/Testimonials";
import BacktoTop from "@/components/BacktoTop";
import RightDemo from "@/components/RightDemo";

export default function AboutMore() {
  return (
    <>
      <RouterHeader />
      <AboutS />
      <Resume />
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
