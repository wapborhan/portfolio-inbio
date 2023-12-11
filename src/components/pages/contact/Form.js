import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail_sr",
        "wapborhan_n499rkp",
        form.current,
        "VBTTWBG2H_z_yDhOK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(result.text + " Your mail has been sent");
        },
        (error) => {
          alert(
            `Sorry Your mail isn't sent \n Please Send Mail direct to \n borhaninfos@gmail.com`
          );
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="rnt-contact-form rwt-dynamic-form row"
      id="contact-form"
    >
      <div className="col-lg-6">
        <div className="form-group">
          <label htmlFor="contact-name">Your Name</label>
          <input
            className="form-control form-control-lg"
            name="from_name"
            id="contact-name"
            type="text"
            required
          />
        </div>
      </div>

      <div className="col-lg-6">
        <div className="form-group">
          <label htmlFor="contact-phone">Phone Number</label>
          <input
            className="form-control"
            name="form_mobile"
            id="contact-phone"
            type="tel"
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="contact-email">Email</label>
          <input
            className="form-control form-control-sm"
            id="contact-email"
            name="to_name"
            type="email"
            required
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="subject">subject</label>
          <input
            className="form-control form-control-sm"
            id="subject"
            name="to_subject"
            type="text"
            required
          />
        </div>
      </div>

      <div className="col-lg-12">
        <div className="form-group">
          <label htmlFor="contact-message">Your Message</label>
          <textarea
            name="message"
            id="contact-message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>

      <div className="col-lg-12">
        <button name="submit" type="submit" id="submit" className="rn-btn">
          <span>SEND MESSAGE</span>
          <i data-feather="arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default ContactUs;
