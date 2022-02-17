import React from "react";
import Header from "./header/Header";
import Info from "./Info.js";
import Services from "./Services.js";
import Portfolio from "./Portfolio.js";
import Resume from "./Resume.js";
import Pricing from "./Pricing.js";
import Blog from "./Blog.js";
import Testimonials from "./Testimonials.js";
import Contact from "./Contact.js";
import Footer from "./footer.js";
import RightDemo from "./RightDemo.js";
import BacktoTop from "./BacktoTop.js";

export default function MainComponent() {
  return (
    <>
      <Header />
      <main className="page-wrapper-two">
        <Info />
        <Services />
        <Portfolio />
        <Resume />
        <Pricing />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
        <RightDemo />
        <BacktoTop />
      </main>
    </>
  );
}
