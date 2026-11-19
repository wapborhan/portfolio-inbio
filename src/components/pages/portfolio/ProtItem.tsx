"use client";
import React, { Component, Fragment } from "react";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";

interface ProjectItem {
  id: string | number;
  name: string;
  image: string;
  language: string;
  source_link?: string;
  live_link?: string;
  about_link?: string;
}

interface ProtItemProps {
  react?: ProjectItem[];
  handleShow?: () => void;
  show?: boolean;
  onHide?: () => void;
}

export default class ProtItem extends Component<ProtItemProps> {
  render() {
    const list = this.props.react || [];
    const reactdata = list.map((item) => {
      return (
        <div
          key={item.id}
          className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
        >
          <div className="rn-portfolio">
            <div className="inner">
              <div className="thumbnail">
                <a>
                  <img src={item.image} alt={item.name || "Portfolio Image"} />
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
                      {item.source_link && (
                        <a
                          href={item.source_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn card-btn"
                          title="Source Code"
                        >
                          <FiGithub />
                        </a>
                      )}
                      {item.live_link && (
                        <a
                          href={item.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn card-btn"
                          title="Live"
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      {item.about_link && (
                        <a
                          href={item.about_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn card-btn"
                          title="Details"
                        >
                          <FiEye />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <Fragment>{reactdata}</Fragment>;
  }
}
