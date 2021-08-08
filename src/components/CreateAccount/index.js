import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import {
  submitCreateAccountForm,
  onCreateAccountInputChange,
} from "../../store/actions";

import Header from "../Header";
import Footer from "../Footer";

import "../../styles/createAccount.scss";

const CreateAccount = ({
  createAccount,
  onCreateAccountInputChange,
  submitCreateAccountForm,
  message,
  disabled,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log('je clic pour créer le compte');
    submitCreateAccountForm();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onCreateAccountInputChange({
      [name]: value,
    });
  };

  return (
    <div className="createaccount-container">
      <Header />

      <div className="createaccount-body">
        <h1 className="createAccount-title">Créer son compte</h1>
        <div>
          <form
            className="createaccount-form"
            action="submit"
            onSubmit={handleSubmit}
          >
            <div className="createaccount-form-required-text">
              Les champs marqués d'un <span className="required">*</span> sont
              obligatoires
            </div>
            <div>
              <input
                className="createaccount-form-email"
                type="email"
                name="email"
                value={createAccount.email}
                placeholder="email"
                onChange={handleInputChange}
                focus
              />
              <span className="required"> *</span>
            </div>
            <div>
              <input
                className="createaccount-form-password"
                type="password"
                name="password"
                value={createAccount.password}
                placeholder="mot de passe"
                focus
                onChange={handleInputChange}
              />
              <span className="required"> *</span>
            </div>
            <div>
              <input
                className="createaccount-form-password_confirm"
                type="password"
                name="passwordConfirm"
                value={createAccount.passwordConfirm}
                placeholder="confirmation du mot de passe"
                focus
                onChange={handleInputChange}
              />
              <span className="required"> *</span>
            </div>

            <div className="createAccount-form-button">
              {!disabled && <Button type="submit">Je crée mon compte</Button>}
              {message && <p className="message">{message}</p>}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapState = (state) => ({
  createAccount: state.user.createAccount,
  password: state.user.createAccount.password,
  passwordConfirm: state.user.createAccount.passwordConfirm,
  message: state.user.message,
});

const mapDispatch = (dispatch) => ({
  onCreateAccountInputChange: (dataChanged) => {
    dispatch(onCreateAccountInputChange(dataChanged));
  },

  submitCreateAccountForm: () => {
    // console.log('je submit le formulaire de création');
    dispatch(submitCreateAccountForm());
  },
});

export default connect(mapState, mapDispatch)(CreateAccount);
