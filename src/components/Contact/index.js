import React from "react";
import { FaTwitch, FaLinkedin, FaGithub } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";

import pierre from "../../assets/img/pierre.jpg";

import "../../styles/contact.scss";

const Contact = () => (
  <div className="contact-container">
    <Header />
    <div className="contact-container-body">
      <div className="contact-container-body-card">
        <div className="card">
          <div className="text">
            <div className="contact-email">
              <a href="mailto:cahuzac.p@gmail.com">Me contacter</a>
            </div>
            <Card>
              <Card.Body>
                <Card.Text>
                  <div className="div-icon">
                    <div className="icon">
                      <a href="https://www.linkedin.com/in/pierre-cahuzac-60b8491a4/">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="icon">
                      <a href="https://github.com/inflames32">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="icon">
                      <a href="https://www.twitch.tv/badtupeupastest">
                        <FaTwitch />
                      </a>
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>

            <div className="socials-networks"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Contact;
