import React from "react";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <div>
      <div className="blog" id="blog">
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <h2 data-aos="flip-up">Simple</h2>
        <h1 data-aos="flip-up">Blogs</h1>
        <div className="blog-main">
          <div className="my-blog">
            <div className="blog-style" data-aos="flip-right">
              <img src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/bruno.png" className="img-projects" alt="" />
              <div className="desc">
                <h2>Portfolio Website</h2>
                <hr />
                <br />
                <p>
                  A cool website made by Bruno Simon, He build this Web with
                  three.js.
                </p>
                <br />
                <br />
                <br />
                <a href="https://bruno-simon.com/" target="_blank" rel="noopener noreferrer">
                  Cek Disini
                </a>
              </div>
            </div>
          </div>
          <div className="blog-style" data-aos="flip-right">
            <img src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/payment.png" className="img-projects" alt="" />
            <div className="desc">
              <h2>Payment Request</h2>
              <hr />
              <br />
              <p>
                A amazing payment request website with cool animation and
                design.
              </p>
              <br />
              <br />
              <br />
              <a href="https://useplink.com/en/" target="_blank" rel="noopener noreferrer">
                Cek Disini
              </a>
            </div>
          </div>
          <div className="blog-style" data-aos="flip-right">
            <img src="https://raw.githubusercontent.com/SamuelMiskan9/tpa-4-react/gh-pages/img/usnews.png" className="img-projects" alt="" />
            <div className="desc">
              <h2>10 ETFs To Build</h2>
              <hr />
              <br />
              <p>
                These ETFs offer diversification opportunities and low fees.
              </p>
              <br />
              <br />
              <br />
              <a
                href="https://money.usnews.com/investing/slideshows/etfs-to-build-a-diversified-portfolio"
                target="_blank" rel="noopener noreferrer"
              >
                Cek Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
