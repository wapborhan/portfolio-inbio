import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import RoutePortfolio from "./router/portfolio/RoutePortfolio";
import RouterServices from "./router/services/RouterServices";

export default function MainComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<RoutePortfolio />} />
      <Route path="/services" element={<RouterServices />} />
    </Routes>
  );
}
