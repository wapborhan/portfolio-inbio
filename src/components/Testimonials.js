import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slide-arrow next-arrow" onClick={onClick}>
      <i className="feather-arrow-right">
        <FiArrowRight />
      </i>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slide-arrow prev-arrow" onClick={onClick}>
      <i className="feather-arrow-left">
        <FiArrowLeft />
      </i>
    </button>
  );
}

function Testimonials() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      className="rn-testimonial-area rn-section-gap section-separator"
      id="testimonial"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">What Clients Say</span>
              <h2 className="title">Testimonial</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-activation testimonial-pb mb--30">
              <Slider {...settings}>
                {/* <!-- Start Single testiminail --> */}
                <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                  <div className="inner">
                    <div className="card-info">
                      <div className="card-thumbnail">
                        <img
                          src="images/testimonial/final-home--1st.png"
                          alt="Testimonial-image"
                        />
                      </div>
                      <div className="card-content">
                        <span className="subtitle mt--10">Rainbow-Themes</span>
                        <h3 className="title">Nevine Acotanza</h3>
                        <span className="designation">
                          Chief Operating Officer
                        </span>
                      </div>
                    </div>
                    <div className="card-description">
                      <div className="title-area">
                        <div className="title-info">
                          <h3 className="title">Android App Development</h3>
                          <span className="date">
                            via Upwork - Mar 4, 2015 - Aug 30, 2021
                          </span>
                        </div>
                        <div className="rating">
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                        </div>
                      </div>
                      <div className="seperator"></div>
                      <p className="discription">
                        Maecenas finibus nec sem ut imperdiet. Ut tincidunt est
                        ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis mauris hendrerit
                        ante. Ut tincidunt est ac dolor aliquam sodales
                        phasellus smauris .
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--End Single testiminail --> */}
                {/* <!-- Start Single testiminail --> */}
                <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                  <div className="inner">
                    <div className="card-info">
                      <div className="card-thumbnail">
                        <img
                          src="images/testimonial/final-home--2nd.png"
                          alt="Testimonial-image"
                        />
                      </div>
                      <div className="card-content">
                        <span className="subtitle mt--10">Bound - Trolola</span>
                        <h3 className="title">Jone Duone Joe</h3>
                        <span className="designation">Operating Officer</span>
                      </div>
                    </div>
                    <div className="card-description">
                      <div className="title-area">
                        <div className="title-info">
                          <h3 className="title">Web App Development</h3>
                          <span className="date">
                            Upwork - Mar 4, 2016 - Aug 30, 2021
                          </span>
                        </div>
                        <div className="rating">
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                        </div>
                      </div>
                      <div className="seperator"></div>
                      <p className="discription">
                        Important fact to nec sem ut imperdiet. Ut tincidunt est
                        ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis mauris hendrerit
                        ante. Ut tincidunt est ac dolor aliquam sodales
                        phasellus smauris .
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--End Single testiminail --> */}
                {/* <!-- Start Single testiminail --> */}
                <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                  <div className="inner">
                    <div className="card-info">
                      <div className="card-thumbnail">
                        <img
                          src="images/testimonial/final-home--3rd.png"
                          alt="Testimonial-image"
                        />
                      </div>
                      <div className="card-content">
                        <span className="subtitle mt--10">Glassfisom</span>
                        <h3 className="title">Nevine Dhawan</h3>
                        <span className="designation">CEO Of Officer</span>
                      </div>
                    </div>
                    <div className="card-description">
                      <div className="title-area">
                        <div className="title-info">
                          <h3 className="title">Android App Design</h3>
                          <span className="date">
                            Fiver - Mar 4, 2015 - Aug 30, 2021
                          </span>
                        </div>
                        <div className="rating">
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                        </div>
                      </div>
                      <div className="seperator"></div>
                      <p className="discription">
                        No more question for design. Ut tincidunt est ac dolor
                        aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                        sem in, lobortis mauris hendrerit ante. Ut tincidunt est
                        ac dolor aliquam sodales phasellus smauris .
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--End Single testiminail --> */}

                {/* <!-- Start Single testiminail --> */}
                <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                  <div className="inner">
                    <div className="card-info">
                      <div className="card-thumbnail">
                        <img
                          src="images/testimonial/final-home--4th.png"
                          alt="Testimonial-image"
                        />
                      </div>
                      <div className="card-content">
                        <span className="subtitle mt--10">NCD - Design</span>
                        <h3 className="title">Mevine Thoda</h3>
                        <span className="designation">Marketing Officer</span>
                      </div>
                    </div>
                    <div className="card-description">
                      <div className="title-area">
                        <div className="title-info">
                          <h3 className="title">CEO - Marketing</h3>
                          <span className="date">
                            Thoda Department - Mar 4, 2018 - Aug 30, 2021
                          </span>
                        </div>
                        <div className="rating">
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                        </div>
                      </div>
                      <div className="seperator"></div>
                      <p className="discription">
                        Marcent Of Vanice and treatment. Ut tincidunt est ac
                        dolor aliquam sodales. Phasellus sed mauris hendrerit,
                        laoreet sem in, lobortis mauris hendrerit ante. Ut
                        tincidunt est ac dolor aliquam sodales phasellus smauris
                        .
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--End Single testiminail --> */}

                {/* <!-- Start Single testiminail --> */}
                <div className="testimonial mt--50 mt_md--40 mt_sm--40">
                  <div className="inner">
                    <div className="card-info">
                      <div className="card-thumbnail">
                        <img
                          src="images/testimonial/final-home--5th.png"
                          alt="Testimonial-image"
                        />
                      </div>
                      <div className="card-content">
                        <span className="subtitle mt--10">Default name</span>
                        <h3 className="title">Davei Luace</h3>
                        <span className="designation">
                          Chief Operating Manager
                        </span>
                      </div>
                    </div>
                    <div className="card-description">
                      <div className="title-area">
                        <div className="title-info">
                          <h3 className="title">Android App Development</h3>
                          <span className="date">
                            via Upwork - Mar 4, 2015 - Aug 30, 2021
                          </span>
                        </div>
                        <div className="rating">
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                          <img
                            src="images/icons/rating.png"
                            alt="rating-image"
                          />
                        </div>
                      </div>
                      <div className="seperator"></div>
                      <p className="discription">
                        When managment is so important. Ut tincidunt est ac
                        dolor aliquam sodales. Phasellus sed mauris hendrerit,
                        laoreet sem in, lobortis mauris hendrerit ante. Ut
                        tincidunt est ac dolor aliquam sodales phasellus smauris
                        .
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--End Single testiminail --> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
