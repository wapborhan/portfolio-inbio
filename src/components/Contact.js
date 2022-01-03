import React from "react";

function Contact() {
  return (
    <div
      className="rn-contact-area rn-section-gap section-separator"
      id="contacts"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">Contact</span>
              <h2 className="title">Contact With Me</h2>
            </div>
          </div>
        </div>
        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
          <div className="col-lg-5">
            <div className="contact-about-area">
              <div className="thumbnail">
                {/* <!--                                <img src="assets/images/contact/contact1.png" alt="contact-img">--> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.384878338166!2d88.95830402281295!3d24.02744201588017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fea5e989a3df29%3A0xf5251011b08f158f!2z4KaP4Ka44KaG4KawIOCmrOCni-CmsOCmueCmvuCmqA!5e0!3m2!1sbn!2sbd!4v1629847093289!5m2!1sbn!2sbd"
                  width="460"
                  height="285"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="title-area">
                <h4 className="title">Borhan Uddin</h4>
                <span>Web Designer</span>
              </div>
              <div className="description">
                <p>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </p>
                <span className="phone">
                  Whatsapp:{" "}
                  <a href="https://api.whatsapp.com/send?phone=8801620557840&text=Hello">
                    +8801620557840
                  </a>
                </span>
                <span className="mail">
                  Email:{" "}
                  <a href="mailto:borhaninfos@gmail.com">
                    borhaninfos@gmail.com
                  </a>
                </span>
              </div>
              <div className="social-area">
                <div className="name">FIND WITH ME</div>
                <div className="social-icone">
                  <a href="http://facebook.com/infoborhan">
                    <i data-feather="facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/wapborhan/">
                    <i data-feather="linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/wapborhan">
                    <i data-feather="instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="600" className="col-lg-7 contact-input">
            <div className="contact-form-wrapper">
              <div className="introduce">
                <form
                  className="rnt-contact-form rwt-dynamic-form row"
                  id="contact-form"
                  method="POST"
                  action="https://wapborhan.com/mail.php"
                >
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-name">Your Name</label>
                      <input
                        className="form-control form-control-lg"
                        name="contact-name"
                        id="contact-name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-phone">Phone Number</label>
                      <input
                        className="form-control"
                        name="contact-phone"
                        id="contact-phone"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="contact-email">Email</label>
                      <input
                        className="form-control form-control-sm"
                        id="contact-email"
                        name="contact-email"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="subject">subject</label>
                      <input
                        className="form-control form-control-sm"
                        id="subject"
                        name="subject"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="contact-message">Your Message</label>
                      <textarea
                        name="contact-message"
                        id="contact-message"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="rn-btn"
                    >
                      <span>SEND MESSAGE</span>
                      <i data-feather="arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
