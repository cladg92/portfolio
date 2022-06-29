import React from "react";
import "./contact-view.css";

function ContactView() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>
        Clara Di Gregorio
        <br />
        Bayreuth, Germany
      </p>
      <p className="email">
        <a className="mail-link" href="mailto:digregorioclr@gmail.com">
          <i class="fa-solid fa-envelope fa-xl" />
        </a>
        <a
          className="mail-link"
          href="mailto:digregorioclr@gmail.com"
          id="mail"
        >
          digregorioclr@gmail.com
        </a>
      </p>
    </div>
  );
}

export default ContactView;
