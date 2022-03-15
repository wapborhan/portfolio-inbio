import React from "react";
import { Link } from "react-router-dom";

export default function RouterServices() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ height: "100vh", alignItems: "center", background: "#888" }}
    >
      <div className="d-block">
        <h4>Under Constraction</h4>
        <Link className="btn btn-primary d-block h-100 p-3" to="/">
          Homepage
        </Link>
      </div>
    </div>
  );
}
