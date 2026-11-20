"use client";

import React from "react";
import PortfolioCard, { ProjectItem } from "./PortfolioCard";

interface AndroidProps {
  project?: ProjectItem[];
}

export default function Android(props: AndroidProps) {
  return (
    <div>
      {/* <!-- Project Tittle Start -->/ */}
      <div className="row">
        <div className="col-md-8">
          <div className="catt-title">
            <h3>
              Some <span className="txt-success">Projects</span> I've Build By
            </h3>
            <div className="text-right">
              <a className="rn-btn btn-brd mr--30">
                <span>Java</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt--10 mt_md--10 mt_sm--10">
        {(props.project || []).map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
