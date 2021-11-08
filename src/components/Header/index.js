/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/header.scss";
import breakpoint from "../../Commons/breakpoint";
import styled from "styled-components";

const HeaderContainer = styled.div`
  text-align: center;
  background-color: #122229;
  width: 100vw;
  height: 6vh;
  line-height: 6vh;
  align-items: center;
  box-shadow: 0 5px 5px #122229;
  position: fixed;
`;

const DivLink = styled.div`
  width: 300px;
  margin: auto;
  height: 6vh;
  font-size: 2rem;

  color: white;
  font-family: "Calibri", sans-serif;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <DivLink>
        <Link to="/" className="header-title">
          Météo actuelle
        </Link>
      </DivLink>
    </HeaderContainer>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Header);
