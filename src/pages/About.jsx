import React from "react";
import { Helmet } from "react-helmet";

export const About = ({ about }) => {
  return (
    <div className="about" id="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 data-aos="zoom-out-down">ABOUT</h1>
      <h2 data-aos="zoom-out-down">ME</h2>
      <div className="about-main" data-aos="fade-right">
        <div className="about-left">{about}</div>
        <div className="about-right">
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/square.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
