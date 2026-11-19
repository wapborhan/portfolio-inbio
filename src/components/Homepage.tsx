"use client";

import React from "react";
import Header from "./pages/header/Header";
import Banner from "./pages/banner/Banner";
import Info from "./pages/info/Info";
import Portfolio from "./pages/portfolio/Portfolio";
import StrategyTwo from "./pages/strategy/StrategyTwo";
import WhyMe from "./pages/whyme/WhyMe";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/footer";
import RightDemo from "./RightDemo";
import BacktoTop from "./BacktoTop";

interface HomePageProps {
  project?: any[];
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <Header />

      <main className="page-wrapper-two">
        <Banner />
        <Info />
        <Portfolio react={props.project} />
        <StrategyTwo />
        <WhyMe />
        <Contact />
        <Footer />
        <RightDemo />
        <BacktoTop />
      </main>
    </>
  );
}
