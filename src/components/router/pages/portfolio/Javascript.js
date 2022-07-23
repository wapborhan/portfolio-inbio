import React from "react";
import { FiGithub, FiExternalLink, FiEye } from "react-icons/fi";

export default function Javascript(props) {
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
                <span>Javascript</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

      <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
        {/* <!-- Start Single Portfolio --> */}
        {props.project.map((portfolio) => {
          return (
            <div
              key={portfolio.id}
              className="col-lg-4 col-xl-3 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div className="rn-portfolio">
                <div className="inner">
                  <div className="thumbnail">
                    <a>
                      <img
                        src={portfolio.image}
                        alt="Personal Portfolio Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title mb-3">{portfolio.name}</h4>
                    <div className="d-flex justify-content-between">
                      <div className="tags m-0 mb-4">
                        <span className={portfolio.language}>
                          {portfolio.language}
                        </span>
                      </div>
                      <div className="meta">
                        <div className="card-btn-container d-flex justify-content-end">
                          <a
                            href={portfolio.source_link}
                            className="btn card-btn"
                            title="Source Code"
                          >
                            <FiGithub />
                          </a>
                          <a
                            href={portfolio.live_link}
                            className="btn card-btn"
                            title="Live"
                          >
                            <FiExternalLink />
                          </a>
                          <a
                            href={portfolio.about_link}
                            className="btn card-btn"
                            title="Details"
                          >
                            <FiEye />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="desc">
                    <p>{portfolio.short_desc}</p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <!-- End Single Portfolio --> */}
      </div>
    </div>
  );
}
