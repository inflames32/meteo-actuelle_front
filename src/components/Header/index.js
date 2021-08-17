/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/header.scss";
import "../../styles/burger-menu.scss";

const Header = ({ onClickHomeBTN }) => {
  return (
    <div className="header">
      <Link to="/" className="header-title">
        Météo actuelle
      </Link>
    </div>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Header);
