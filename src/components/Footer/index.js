import React from "react";
import { Link } from "react-router-dom";
//import "../../styles/footer.scss";
import breakpoint from "../../Commons/breakpoint";
import styled from "styled-components";
/* { css }  */

const A = styled.button`
  text-decoration: none;
  background-color: red;
`;
const FooterContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
    text-decoration: none;
    text-align: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
    text-decoration: none;
    text-align: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
    text-align: center;
    text-decoration: none;
  }
  width: 100%;
  background-color: #122229;
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 9vh;
  line-height: 9vh;
  align-items: center;
`;
const FooterContainerNav = styled.ul`
  display: flex;
  margin: auto;
  justify-content: space-between;
`;
const FooterContainerNavLi = styled.li`
  width: 200px;
  font-family: "Calibri", sans-serif;
  font-size: 1.6rem;
  text-decoration: none;
`;

const Footer = () => (
  <FooterContainer>
    <FooterContainerNav>
      <FooterContainerNavLi>
        <Link to="/" className="footer-container-title">
          Météo actuelle
        </Link>
      </FooterContainerNavLi>
      <FooterContainerNavLi>
        <Link to="/contact" className="footer-container-title">
          Contact
        </Link>
      </FooterContainerNavLi>
    </FooterContainerNav>
  </FooterContainer>
);

export default Footer;
