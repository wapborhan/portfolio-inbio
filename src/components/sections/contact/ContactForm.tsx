"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

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
          alert(result.text + " " + t("contact.form.success"));
        },
        (error) => {
          alert(t("contact.form.error"));
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
          <label htmlFor="contact-name">{t("contact.form.name")}</label>
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
          <label htmlFor="contact-phone">{t("contact.form.phone")}</label>
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
          <label htmlFor="contact-email">{t("contact.form.email")}</label>
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
          <label htmlFor="subject">{t("contact.form.subject")}</label>
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
          <label htmlFor="contact-message">{t("contact.form.message")}</label>
          <textarea
            name="message"
            id="contact-message"
            cols={30}
            rows={10}
          ></textarea>
        </div>
      </div>

      <div className="col-lg-12">
        <button name="submit" type="submit" id="submit" className="rn-btn">
          <span>{t("contact.form.submit")}</span>
          <i data-feather="arrow-right"></i>
        </button>
      </div>
    </form>
  );
}
