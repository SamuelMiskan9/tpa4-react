import React from "react";
import { Helmet } from "react-helmet";

const Home = ({ info }) => {
  return (
    <div>
      <main>
        <div className="content-left" data-aos="zoom-in-right">
          <Helmet>
            <title>Home</title>
          </Helmet>
          <h1>Personal</h1>
          <h2>Website</h2>
          <p className="pro">{info}</p>
          <a
            href="https://www.youtube.com/watch?v=GtL1huin9EE&t=3s"
            type="button"
            className="btn-rick"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
        <div className="content-right" data-aos="zoom-in-up">
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/pf4.jpg"
            alt=""
            className="hero-img"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
