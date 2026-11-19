"use client";
import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import Modal from "./Modal";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ProtItem from "./ProtItem";

interface PortfolioProps {
  react?: any[];
}

function Portfolio(props: PortfolioProps) {
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
        <div className="row mt--10 mt_md--10 mt_sm--10 justify-content-center">
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
            <Link className="rn-btn" href="/portfolio">
              {t("portfolio.btn")}
              <FiLoader className="fab-pulse fab-fw ml-2 inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
