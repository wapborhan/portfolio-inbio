import MainAccordion from "./MainAccordion";
import Loading from "../../router/Loading";
import LazyLoad from "react-lazyload";

const Strategy = () => {
  return (
    <div>
      <div
        className="rn-service-area rn-section-gap section-separator"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-5"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <span className="subtitle">WORKING STRATEGY</span>
                <h2 className="title">What I Do</h2>
              </div>
            </div>
          </div>
          <div className="row row--25 mt_md--10 mt_sm--10 justify-content-center">
            <div className="col-lg-12">
              <div className="rn-blog">
                <div className="inner">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="sr-itemd">
                        <div className="thumbnail">
                          <a>
                            <LazyLoad placeholder={<Loading />}>
                              <img
                                src="images/strategy.jpg"
                                alt="WapBorhan_Blog_Post-3"
                              />
                            </LazyLoad>
                          </a>
                        </div>

                        <div className="content p-0 m-0">
                          <p className="title">
                            We are always sincere in taking projects, giving
                            quality work, and quick support because the client's
                            satisfaction is the most important part of our
                            working strategy. We believe that good sell is only
                            possible through good quality services.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {" "}
                      <MainAccordion />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
