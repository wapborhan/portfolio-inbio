import React from "react";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import Loading from "../../Loading";
import WhyMeDetails from "./WhyMeDetails";

export default function RouterWhyMe() {
  return (
    <>
      <RouterHeader />
      <WhyMeDetails />
      <RouterFooter />
    </>
  );
}
