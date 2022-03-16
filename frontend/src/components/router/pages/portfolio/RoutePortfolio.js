import React from "react";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import Loading from "../../Loading";
import PortfolioS from "./PortfolioS";

export default function RoutePortfolio() {
  return (
    <>
      <RouterHeader />
      <PortfolioS />
      <RouterFooter />
    </>
  );
}
