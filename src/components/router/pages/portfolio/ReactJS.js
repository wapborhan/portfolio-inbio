import React from "react";
import { FiGithub, FiExternalLink, FiEye, FiLoader } from "react-icons/fi";

export default function ReactJS(props) {
  const reactdata = props.react.map((item) => {
    return (
      <div
        key={item.id}
        className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
      >
        <div className="rn-portfolio">
          <div className="inner">
            <div className="thumbnail">
              <a>
                <img src={item.image} alt="Personal Portfolio Images" />
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
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={item.live_link}
                      className="btn card-btn"
                      title="Live"
                    >
                      <FiExternalLink />
                    </a>
                    <a
                      href={item.about_link}
                      className="btn card-btn"
                      title="Details"
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
  });
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
                <span>React</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Tiitle End --> */}

      <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
        {/* <!-- Start Single Portfolio --> */}
        {reactdata}
      </div>
    </div>
  );
}
