import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutMore from "./router/pages/about/AboutMore";
import RoutePortfolio from "./router/pages/portfolio/RoutePortfolio";
import RouterServices from "./router/pages/services/RouterServices";
import RouterWhyMe from "./router/pages/whyme/RouterWhyMe";

export default function MainComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMore />} />
      <Route path="/portfolio" element={<RoutePortfolio />} />
      <Route path="/services" element={<RouterServices />} />
      <Route path="/whyme" element={<RouterWhyMe />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
