import React from "react";
import "./contact-view.css";

function ContactView() {
  return (
    <div class="contact">
      <h1>Contact</h1>
      Nowhere Str. 23 <br />
      95447 Bayreuth <br />
      Deutschland <br />
      <br />
      <a href="tel:+393791679200">Tel: +393791679200</a>
      <br />
      <label>Skype:</label>
      <a href="skype:live:.cid.7126532c814c9132" id="skype">
        CLARA DI GREGORIO
      </a>
      <br />
      <label>E-mail:</label>
      <a href="mailto:digregorioclr@gmail.com" id="mail">
        digregorioclr@gmail.com
      </a>
      <a href="mailto:digregorioclr@gmail.com">E-mail me</a>
      <form id="contact-form">
        <p>Please, leave a message and I will come back to you!</p>
        <div class="input-wrapper">
          <label for="Email" class="standard-label">
            Email:
          </label>
          <input type="email" id="Email" value="" required placeholder="(*)" />
        </div>

        <div class="input-wrapper">
          <label for="telephone" class="standard-label">
            Number:
          </label>
          <input
            type="tel"
            id="telephone"
            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
            required
            placeholder="(*)"
          />
        </div>

        <div class="input-wrapper">
          <label for="message" class="standard-label">
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            cols="26"
            required
            maxlength="240"
            placeholder="Please include a short message (*)"
          ></textarea>
        </div>

        <button type="submit" name="button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactView;
