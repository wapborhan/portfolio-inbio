import React from "react";
import Info from "./components/Info.js";
import Services from "./components/Services.js";
import Portfolio from "./components/Portfolio.js";
// import Resume from "./components/Resume.js";
import Pricing from "./components/Pricing.js";
import Blog from "./components/Blog.js";
import Testimonials from "./components/Testimonials.js";
import TestiSlider from "./components/Slider";
// import Contact from "./components/Contact.js";
import Footer from "./components/footer.js";
import RightDemo from "./components/RightDemo.js";
import BacktoTop from "./components/BacktoTop.js";

function Main() {
  return (
    <main className="page-wrapper-two">
      <Info />
      <Services />
      <Portfolio />
      {/* <Resume /> */}
      <Pricing />
      <Blog />
      <Testimonials />
      <TestiSlider />
      {/* <Contact /> */}
      <Footer />
      <RightDemo />
      <BacktoTop />
    </main>
  );
}

export default Main;
