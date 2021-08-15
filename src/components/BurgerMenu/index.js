import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../../store/actions";
import "../../styles/burger-menu.scss";

const BurgerMenu = () => (
  <div className="burger-menu-container">
    <nav className="burger-menu-navigation">
      <span className="close-menu">Meteo Actuelle</span>
      <span className="close-menu" onClick={closeMenu()}>
        X
      </span>
      <Link to="/signup" className="burger-menu-containe-create menu-item">
        Inscription
      </Link>
      <Link to="/signin" className="burger-menu-container-login menu-item">
        Connexion
      </Link>
      <Link to="/contact" className="burger-menu-container-contact menu-item">
        Contact
      </Link>
    </nav>
  </div>
);

const mapState = (state) => ({
  menuBurgerIsOpen: state.user.menuBurgerIsOpen,
});

const mapDispatch = (dispatch) => ({
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(mapState, mapDispatch)(BurgerMenu);
