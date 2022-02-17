import React from "react";
import Header from "./pages/header/Header";
import {
  Info,
  Services,
  Portfolio,
  Resume,
  Blog,
  Testimonials,
  Contact,
  Footer,
} from "./pages/AllPages";
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
