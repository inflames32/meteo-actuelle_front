/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/header.scss";
import "../../styles/burger-menu.scss";
import { onClickHomeBTN } from "../../store/actions";
const Header = ({ onClickHomeBTN }) => {
  const handleHomeBTN = () => {
    onClickHomeBTN();
  };

  return (
    <div className="header">
      <Link to="/" className="header-title" onClick={handleHomeBTN}>
        Météo actuelle
      </Link>
    </div>
  );
};

const mapState = (state) => ({
  city: state.user.city,
  choose: state.user.choose,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Header);
