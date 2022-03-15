import React from "react";
import { FaSpinner } from "react-icons/fa";
import RouterHeader from "../header/RouterHeader";
import RouterFooter from "../footer/RouterFooter";
import Loading from "../../Loading";

export default function RouterServices() {
  return (
    <>
      <RouterHeader />

      <div className="sr-content pt--30">
        <div className="container">
          <div className="sect-main">
            <Loading />
          </div>
        </div>
      </div>

      <RouterFooter />
    </>
  );
}
