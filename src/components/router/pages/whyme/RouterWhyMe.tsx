"use client";

import React from "react";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import WhyMeDetails from "./WhyMeDetails";
import "./whyme.css";

export default function RouterWhyMe() {
  return (
    <>
      <RouterHeader />
      <WhyMeDetails />
      <RouterFooter />
    </>
  );
}
