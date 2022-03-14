import React from "react";

export default function Code() {
  return (
    <div
      className="rn-service-area rn-section-gap section-separator"
      id="features"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span className="subtitle">Coding Activity</span>
              <h2 className="title">What I Do</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10 justify-content-center">
          {/* <!-- Start Single Service --> */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-service">
              <div className="inner">
                <figure>
                  <embed src="https://wakatime.com/share/@wapborhan/9f7a670a-da4c-4fb6-b863-c3e4ea50482b.svg"></embed>
                </figure>
              </div>
              {/* <!-- <a className="over-link" href="more/features/web-design.html"></a> --> */}
            </div>
          </div>
          {/* <!-- End SIngle Service --> */}
          {/* <!-- Start Single Service --> */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-service">
              <div className="inner">
                <figure>
                  <embed src="https://wakatime.com/share/@wapborhan/bd73644a-dd31-4e7b-b795-bd2070596139.svg"></embed>
                </figure>
              </div>
              {/* <!-- <a className="over-link" href="more/features/web-development.html"></a> --> */}
            </div>
          </div>
          {/* <!-- End SIngle Service --> */}
          {/* <!-- Start Single Service --> */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div className="rn-service">
              <div className="inner">
                <figure>
                  <embed src="https://wakatime.com/share/@wapborhan/edc87b16-a9fb-414d-8bf6-3400865ae296.svg"></embed>
                </figure>
              </div>
              {/* <!-- <a className="over-link" href="more/features/app-development.html"></a> --> */}
            </div>
          </div>
          {/* <!-- End SIngle Service --> */}
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <a className="rn-btn" href="more/features/index.html">
              See More <i className="feather-loader">{/* <FiLoader /> */}</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
