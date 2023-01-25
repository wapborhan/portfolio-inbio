import React from "react";
import Header from "./pages/header/Header";
import {
  Banner,
  Info,
  Services,
  Portfolio,
  // Resume,
  Strategy,
  WhyMe,
  Blog,
  Testimonials,
  Contact,
  Footer,
  // Code,
} from "./pages/AllPages";
import RightDemo from "./RightDemo.js";
import BacktoTop from "./BacktoTop.js";
import StrategyTwo from "./pages/strategy/StrategyTwo";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="page-wrapper-two">
        <Banner />
        <Info />
        <Services />
        <Portfolio />
        {/* <Resume /> */}
        {/* <Strategy /> */}
        <StrategyTwo />
        <WhyMe />
        <Blog />
        {/* <Code /> */}
        <Testimonials />
        <Contact />
        <Footer />
        <RightDemo />
        <BacktoTop />
      </main>
    </>
  );
}
