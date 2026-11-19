"use client";

import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import LazyLoad from "@/components/common/LazyLoad";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";
import { ProjectItem } from "@/types/project";

interface PortfolioItemProps {
  data: ProjectItem;
}

export default function PortfolioItem({ data }: PortfolioItemProps) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        data-aos-once="true"
        className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
      >
        <div className="rn-portfolio">
          <div className="inner">
            <div className="thumbnail">
              <a onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
                <LazyLoad>
                  <img src={data.image} alt={data.name} />
                </LazyLoad>
              </a>
            </div>
            <div className="content">
              <h4 className="title mb-3">
                <a onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
                  {data.name}
                </a>
              </h4>
              <div className="d-flex justify-content-between">
                <div className="tags m-0 mb-4">
                  <span className={data.language}>{data.language}</span>
                </div>
                <div className="meta">
                  <div className="card-btn-container d-flex justify-content-end">
                    <a
                      href={data.source_link}
                      className="btn card-btn"
                      title="Source Code"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={data.live_link}
                      className="btn card-btn"
                      title="Live"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                    <a
                      onClick={() => setModalShow(true)}
                      className="btn card-btn cursor-pointer"
                      title="Details"
                      style={{ cursor: "pointer" }}
                    >
                      <FiEye />
                    </a>
                  </div>
                </div>
              </div>
              <div className="desc">
                <p>{data.short_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortfolioModal
        show={modalShow}
        onClose={() => setModalShow(false)}
        data={data}
      />
    </>
  );
}
