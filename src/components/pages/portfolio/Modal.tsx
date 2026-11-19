"use client";
import React from "react";

interface ModalProps {
  show?: boolean;
  onHide?: () => void;
  project?: any;
}

export default function Modal(props: ModalProps) {
  const showClass = props.show ? "modal fade show d-block" : "modal fade";

  if (!props.show) return null;

  return (
    <div className={showClass}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={props.onHide}>
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio-popup-thumbnail">
                  <div className="image">
                    <img
                      className="w-100"
                      src="/images/portfolio/portfolio-04.jpg"
                      alt="slide"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="text-content">
                  <h3>
                    <span>Featured - Design</span> App Design Development.
                  </h3>
                  <p className="mb--30">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate distinctio assumenda explicabo veniam temporibus
                    eligendi.
                  </p>
                  <p>
                    Consectetur adipisicing elit. Cupiditate distinctio
                    assumenda. dolorum alias suscipit rerum maiores aliquam
                    earum odit, nihil culpa quas iusto hic minus!
                  </p>
                  <div className="button-group mt--20">
                    <a href="#contacts" className="rn-btn thumbs-icon">
                      <span>LIKE THIS</span>
                    </a>
                    <a href="#contacts" className="rn-btn">
                      <span>VIEW PROJECT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
