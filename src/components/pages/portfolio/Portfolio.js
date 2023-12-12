import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProtItem from "./ProtItem";

function Portfolio(props) {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="rn-portfolio-area rn-section-gap section-separator"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{t("portfolio.subheading")}</span>
              <h2 className="title">{t("portfolio.heading")}</h2>
            </div>
          </div>
        </div>
        <div className="row  mt--10 mt_md--10 mt_sm--10 justify-content-center">
          <ProtItem
            react={props.react}
            handleShow={handleShow}
            show={show}
            onHide={handleClose}
          />
        </div>
        <Modal />
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <Link className="rn-btn" to="portfolio">
              {t("portfolio.btn")}

              <FiLoader className="fab-pulse fab-fw ml-2" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="meta">
                  <div className="card-btn-container d-flex">
                    <div>
                      <a
                        href="https://github.com/wapborhan/github-users-react"
                        className="btn card-btn"
                        title="Source Code"
                      >
                        <i>
                          <FiGithub />
                        </i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://code.wapborhan.com/github-users-react/"
                        className="btn card-btn"
                        title="Live"
                      >
                        <i className="feather-external-link">
                          <FiExternalLink />
                        </i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/wapborhan/github-users-react/blob/main/README.md"
                        className="btn card-btn"
                        title="Details"
                      >
                        <i className="feather-eye">
                          <FiEye />
                        </i>
                      </a>
                    </div>
                  </div>
                </div> */}
      {/* <Modal show={show} onHide={handleClose} /> */}
    </div>
  );
}

export default Portfolio;
