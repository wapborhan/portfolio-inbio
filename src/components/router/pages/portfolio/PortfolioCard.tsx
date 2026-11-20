"use client";

import React from "react";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";
import { getImageUrl } from "@/lib/image";

export interface ProjectItem {
  id: string | number;
  name: string;
  language: string;
  image: string;
  source_link?: string;
  live_link?: string;
  about_link?: string;
  short_desc?: string;
}

export interface PortfolioCardProps {
  item: ProjectItem;
  className?: string;
}

export default function PortfolioCard({
  item,
  className = "portfolio-item order-1",
}: PortfolioCardProps) {
  return (
    <div className={className}>
      <div className="rn-portfolio">
        <div className="inner">
          <div className="thumbnail">
            <a>
              <img
                src={getImageUrl(item.image)}
                alt={item.name || "Personal Portfolio Images"}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = getImageUrl(
                    "/images/portfolio/no-image.jpg"
                  );
                }}
              />
            </a>
          </div>
          <div className="content">
            <h4 className="title mb-3">{item.name}</h4>
            <div className="d-flex justify-content-between">
              <div className="tags m-0 mb-4">
                <span className={item.language}>{item.language}</span>
              </div>
              <div className="meta">
                <div className="card-btn-container d-flex justify-content-end">
                  <a
                    href={item.source_link}
                    className="btn card-btn"
                    title="Source Code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={item.live_link}
                    className="btn card-btn"
                    title="Live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={item.about_link}
                    className="btn card-btn"
                    title="Details"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiEye />
                  </a>
                </div>
              </div>
            </div>
            <div className="desc">
              <p>{item.short_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
