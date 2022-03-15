import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutMore from "./router/about/AboutMore";
import RoutePortfolio from "./router/portfolio/RoutePortfolio";
import RouterServices from "./router/services/RouterServices";
import RouterWhyMe from "./router/whyme/RouterWhyMe";

export default function MainComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMore />} />
      <Route path="/portfolio" element={<RoutePortfolio />} />
      <Route path="/services" element={<RouterServices />} />
      <Route path="/whyme" element={<RouterWhyMe />} />
    </Routes>
  );
}
