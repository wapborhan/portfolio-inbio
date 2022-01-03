import React from "react";

function Services() {
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
              <span className="subtitle">Features</span>
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
                <div className="icon">
                  <i data-feather="menu"></i>
                </div>
                <div className="content">
                  <h4 className="title">Web Design</h4>
                  <p className="description">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                  <a className="read-more-button">
                    <i className="feather-arrow-right"></i>
                  </a>
                </div>
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
                <div className="icon">
                  <i data-feather="book-open"></i>
                </div>
                <div className="content">
                  <h4 className="title">Web Development</h4>
                  <p className="description">
                    {" "}
                    It uses a dictionary of over 200 Latin words, combined with
                    a handful of model sentence.
                  </p>
                  <a className="read-more-button">
                    <i className="feather-arrow-right"></i>
                  </a>
                </div>
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
                <div className="icon">
                  <i data-feather="tv"></i>
                </div>
                <div className="content">
                  <h4 className="title">App Development</h4>
                  <p className="description">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                  <a className="read-more-button">
                    <i className="feather-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- <a className="over-link" href="more/features/app-development.html"></a> --> */}
            </div>
          </div>
          {/* <!-- End SIngle Service --> */}
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 text-center">
            <a className="rn-btn" href="more/features/index.html">
              See More <i className="feather-loader"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
