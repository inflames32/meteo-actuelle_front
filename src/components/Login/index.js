import React from "react";
import { connect } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

import { onFormLogin, onInputChange } from "../../store/actions";

import "../../styles/login.scss";

const Login = ({
  loginData,
  onInputChange,
  onFormLogin,
  loadingLoginSubmit,
  isLogged,
  message,
}) => {
  const formInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormLogin();
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-body">
        <h1 className="createAccount-title">Connexion à mon compte</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {!loadingLoginSubmit && (
            <div className="login-body-input">
              <FormControl
                className="login-form-email"
                type="email"
                name="email"
                value={loginData.email}
                placeholder="email"
                focus
                onChange={formInputChange}
              />
              <FormControl
                className="login-form-password"
                type="password"
                name="password"
                autoComplete="off"
                value={loginData.password}
                placeholder="mot de passe"
                focus
                onChange={formInputChange}
              />
            </div>
          )}
          {loadingLoginSubmit && (
            <div className="login-body-input">
              <FormControl
                className="login-form-email"
                type="email"
                name="email"
                value={loginData.email}
                placeholder="email"
                focus
                onChange={formInputChange}
                disabled
              />
              <FormControl
                className="login-form-password"
                type="password"
                name="password"
                value={loginData.password}
                placeholder="mot de passe"
                focus
                onChange={formInputChange}
                disabled
              />
            </div>
          )}
          {!loadingLoginSubmit && (
            <div className="login-body-button">
              <Button type="submit">Je me connecte</Button>
            </div>
          )}
          {loadingLoginSubmit && (
            <div className="login-body-button">
              <Button loading type="submit" className="login-body-button">
                Je me connecte
              </Button>
            </div>
          )}
          {isLogged && <span>{message}</span>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

Login.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormLogin: PropTypes.func.isRequired,
  loadingLoginSubmit: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  loginData: PropTypes.object.isRequired,
};

const mapState = (state) => ({
  loginData: state.user.loginData,
  loadingLoginSubmit: state.user.loadingLoginSubmit,
  isLogged: state.user.isLogged,
  loading: state.user.loading,
  message: state.user.message,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changedData) => {
    dispatch(onInputChange(changedData));
  },
  onFormLogin: () => {
    dispatch(onFormLogin());
  },
});

export default connect(mapState, mapDispatch)(Login);
