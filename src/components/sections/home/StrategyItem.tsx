"use client";

import React from "react";
import LazyLoad from "@/components/common/LazyLoad";

interface StrategyItemProps {
  step: string;
  title: string;
  desc: string;
  image: string;
}

export default function StrategyItem({ step, title, desc, image }: StrategyItemProps) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt--30">
      <div className="rn-strategy text-center">
        <div className="inner">
          <div className="thumbnail">
            <LazyLoad>
              <img src={image} alt={title} />
            </LazyLoad>
          </div>
          <div className="content">
            <span className="subtitle">{step}</span>
            <h4 className="title">{title}</h4>
            <p className="description">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
