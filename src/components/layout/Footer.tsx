"use client";

import React from "react";
import LazyLoad from "@/components/common/LazyLoad";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="rn-footer-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <Link href="/">
                  <LazyLoad>
                    <img
                      src="/images/logo/logo-vertical-dark.png"
                      alt="Wapborhan-Footer_logo"
                    />
                  </LazyLoad>
                </Link>
              </div>

              <p className="description mt--30">
                © 2022. {t("footer.rights")}{" "}
                <a target="_blank" rel="noreferrer" href="https://wapborhan.com">
                  WapBorhan
                </a>
                . | {t("footer.designBy")}{" "}
                <a target="_blank" rel="noreferrer" href="https://srdreamlab.com/">
                  SR Dream Lab
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
