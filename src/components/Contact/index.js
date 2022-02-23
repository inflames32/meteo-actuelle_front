import React from "react";
import { FaTwitch, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => (
  <div className="contact">
    <Header />
    <div className="contact-body">
      <div className="contact-card">
        <div className="contact-email">
          <span className="contact-email-icon">
            <AiOutlineMail />
          </span>
          <a
            href="mailto:cahuzac.p@gmail.com"
            className="contact-email-adresse"
          >
            Me contacter
          </a>
        </div>
        <div className="contact-networks">
          <div className="contact-networks-icon">
            <a href="https://www.linkedin.com/in/pierre-cahuzac-60b8491a4/">
              <FaLinkedin className="svg" />
            </a>
          </div>
          <div className="contact-networks-icon">
            <a href="https://github.com/inflames32">
              <FaGithub className="svg" />
            </a>
          </div>
          <div className="contact-networks-icon">
            <a href="https://www.twitch.tv/badtupeupastest">
              <FaTwitch className="svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Contact;
