"use client";

import React from "react";
import { FiThumbsUp, FiChevronRight, FiX } from "react-icons/fi";
import { ProjectItem } from "@/types/project";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  data: ProjectItem | null;
}

export default function PortfolioModal({ show, onClose, data }: ModalProps) {
  if (!show || !data) return null;

  return (
    <div
      className="modal-backdrop-custom"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        className="modal-content-custom"
        style={{
          position: "relative",
          maxWidth: "800px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "10px",
          padding: "30px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            color: "#fff",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <FiX />
        </button>
        <div className="modal-body">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="portfolio-popup-thumbnail">
                <div className="image">
                  <img
                    className="w-100"
                    src={data.image}
                    alt={data.name}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="text-content">
                <h3>
                  <span>Featured - Design</span> {data.name}
                </h3>
                <p className="mb--30">{data.short_desc}</p>
                <div className="button-group mt--20">
                  <a
                    href={data.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="rn-btn thumbs-icon"
                  >
                    <span>LIKE THIS</span>
                    <FiThumbsUp />
                  </a>
                  <a
                    href={data.source_link}
                    target="_blank"
                    rel="noreferrer"
                    className="rn-btn"
                  >
                    <span>VIEW PROJECT</span>
                    <FiChevronRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
