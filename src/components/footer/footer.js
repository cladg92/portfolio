import React from "react";
import "./footer.css";
import twitter from "./twitter.svg";
import github from "./github.svg";
import linkedin from "./linkedin.svg";

function Footer() {
  return (
    <footer className="page-footer">
      <p>Find me on</p>
      <div className="social-media">
        <a
          href="https://github.com/cladg92"
          target="_blank"
          rel="noreferrer"
          className="link filter-white"
          aria-hidden="true"
        >
          <img src={github} alt="github" width="30" height="30" />
        </a>
        <a
          href="https://twitter.com/?lang=it"
          target="_blank"
          rel="noreferrer"
          className="link filter-white"
          aria-hidden="true"
        >
          <img src={twitter} alt="github" width="30" height="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/clara-di-gregorio-8082291a9/"
          target="_blank"
          rel="noreferrer"
          className="link filter-white"
          aria-hidden="true"
        >
          <img src={linkedin} alt="github" width="30" height="30" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
