import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h2
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        MY
      </h2>
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        CONTACT
      </h1>
      <div className="contact-main">
        <a
          href="https://www.instagram.com/samuel.miskan/"
          target="_blank"
          data-aos="flip-down"
          rel="noopener noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/instagram.png"
            alt=""
            className="contact-logo"
          />
        </a>
        <a
          href="https://github.com/samuelMiskan9?"
          target="_blank"
          data-aos="flip-down"
          rel="noopener noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/github.png "
            alt=""
            className="contact-logo"
          />
        </a>
        <a
          href="mailto:samuelmiskan@gmail.com"
          target="_blank"
          data-aos="flip-down"
          rel="noopener noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/gmail.png"
            alt=""
            className="contact-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
