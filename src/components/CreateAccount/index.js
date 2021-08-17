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
        <h1 className="createAccount-title">Inscription</h1>
        <div>
          <form
            className="createaccount-form"
            action="submit"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className="createaccount-form-email"
                type="email"
                name="email"
                value={createAccount.email}
                placeholder="Email (obligatoire)"
                onChange={handleInputChange}
                focus
              />
            </div>
            <div>
              <input
                className="createaccount-form-password"
                type="password"
                name="password"
                value={createAccount.password}
                placeholder="Mot de passe (obligatoire)"
                focus
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="createaccount-form-password_confirm"
                type="password"
                name="password_confirmation"
                value={createAccount.password_confirmation}
                placeholder="Confirmation du mot de passe (obligatoire)"
                focus
                onChange={handleInputChange}
              />
            </div>

            <div className="createAccount-form-button">
              {!disabled && <Button type="submit">Valider</Button>}
            </div>
            {message && <p className="message">{message}</p>}
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
  password_confirmation: state.user.createAccount.password_confirmation,
  message: state.user.message,
});

const mapDispatch = (dispatch) => ({
  onCreateAccountInputChange: (dataChanged) => {
    dispatch(onCreateAccountInputChange(dataChanged));
  },

  submitCreateAccountForm: () => {
    dispatch(submitCreateAccountForm());
  },
});

export default connect(mapState, mapDispatch)(CreateAccount);
