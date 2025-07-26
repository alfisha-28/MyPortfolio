import React from 'react';
import '../Styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Let’s Create Something Amazing Together</h2>
      <p>Reach out to collaborate, discuss ideas, or just say hi 👋</p>

      <form
        className="contact-form"
        action="https://formspree.io/f/your_form_id"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://linkedin.com/in/alfisha-ansari-5a4608358/" target="_blank" rel="noreferrer">
          <FaLinkedin style={{ marginRight: "8px" }} /> LinkedIn
        </a>
        <a href="https://github.com/alfisha-28" target="_blank" rel="noreferrer">
          <FaGithub style={{ marginRight: "8px" }} /> GitHub
        </a>
        <a href="mailto:ansarialfisha2006@gmail.com">
          <FaEnvelope style={{ marginRight: "8px" }} /> Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
