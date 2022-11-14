import React from "react";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <h2 data-aos="zoom-in-right">My</h2>
      <h1 data-aos="zoom-in-right">Projects</h1>

      <div className="port-main">
        <div className="projects" data-aos="flip-right">
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/bbtn.png"
            className="img-projects"
            alt=""
          />
          <div className="desc">
            <h2>Bring Back The Nature</h2>
            <hr />
            <br />
            <p>Simple survival game made with Unity3D Engine.</p>
            <br />
            <br />
            <br />
            <a
              href="https://www.youtube.com/watch?v=w7ywcHq0SVY&t=150s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Disini
            </a>
          </div>
        </div>

        <div className="projects" data-aos="flip-right">
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/tiweb.png"
            className="img-projects"
            alt=""
          />
          <div className="desc">
            <h2>Simple Web</h2>
            <br />
            <hr />
            <br />
            <p>A simple Web made by myself, to introduce our University.</p>
            <br />
            <br />
            <br />
            <a
              href="https://samuelmiskan9.github.io/responsivewebtest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Disini
            </a>
          </div>
        </div>

        <div className="projects" data-aos="flip-right">
          <img
            src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/todo.png "
            className="img-projects"
            alt=""
          />
          <div className="desc">
            <h2>To do List</h2>
            <br />
            <hr />
            <br />
            <p>a Simple to create To Do list, with a simple design.</p>
            <br />
            <br />
            <br />
            <a
              href="https://samuelmiskan9.github.io/TODO_IO/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Disini
            </a>
          </div>
        </div>
        <div className="projects" data-aos="flip-right">
          <img src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/bmi.png" className="img-projects" alt="" />
          <div className="desc">
            <h2>BMI CALCULATOR</h2>
            <br />
            <hr />
            <br />
            <p>A simple program to calcualte your BMI.</p>
            <br />
            <br />
            <br />
            <a
              href="https://bmi-calculator-simple.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Disini
            </a>
          </div>
        </div>

        <div className="projects" data-aos="flip-right">
          <img src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/movie.png" className="img-projects" alt="" />
          <div className="desc">
            <h2>MOVIE APP API</h2>
            <br />
            <hr />
            <br />
            <p>Movie app with TMDB api, and search function</p>
            <br />
            <br />
            <br />
            <a
              href="https://movielist12.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Disini
            </a>
          </div>
        </div>
        <div className="projects" data-aos="flip-right">
          <img src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/ayf.png" className="img-projects" alt="" />
          <div className="desc">
            <h2>Ayf Forum</h2>
            <br />
            <hr />
            <br />
            <p>Group Project Web Development Forum Discussion.</p>
            <br />
            <br />
            <br />
            <a
              href="https://ayf-fe4.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cek Disini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
