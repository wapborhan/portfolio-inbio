import React from "react";

function Blog() {
  return (
    <div className="rn-blog-area rn-section-gap section-separator" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-once="true"
              className="section-title text-center"
            >
              <span className="subtitle">
                Visit my blog and keep your feedback
              </span>
              <h2 className="title">My Blog</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
          {/* <!-- Blog Iteam --> */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-once="true"
            className="col-lg-12 "
          >
            <div className="rn-blog">
              <div className="inner">
                <div className=" active">
                  <div className="portfolio-single">
                    <div className="row direction">
                      <div className="col-lg-5">
                        <div className="inner">
                          <h5 className="title">What is a Blog?</h5>
                          <p className="discriptions">
                            A blog (a shortened version of “weblog”) is an
                            online journal or informational website displaying
                            information in reverse chronological order, with the
                            latest posts appearing first, at the top. It is a
                            platform where a writer or a group of writers share
                            their views on an individual subject.
                          </p>
                          {/* <!--
                                            <div className="ft-area">
                                                <div className="feature-wrapper">
                                                    <div className="single-feature">
                                                        <i data-feather="check"></i>
                                                        <p>Wordpress</p>
                                                    </div>
                                                    <div className="single-feature">
                                                        <i data-feather="check"></i>
                                                        <p>Blogger</p>
                                                    </div>
                                                    <div className="single-feature">
                                                        <i data-feather="check"></i>
                                                        <p>Wix</p>
                                                    </div>
                                                </div>
                                            </div>
--> */}
                          <div className="row">
                            <div className="col-lg-12 mb-5 text-center">
                              <a
                                className="rn-btn"
                                href="https://blog.wapborhan.com/"
                              >
                                My Blog
                                <i className="feather-loader"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-xl-7 sr-thmb">
                        <a href="https://blog.wapborhan.com/">
                          <div className="thumbnail">
                            <img
                              src="images/blog.jpg"
                              alt="Personal Portfolio Image"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="over-link" href="https://blog.wapborhan.com/"></a>
            </div>
          </div>
          {/* <!-- Blog Iteam --> */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
