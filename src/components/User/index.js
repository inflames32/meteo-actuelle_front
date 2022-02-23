import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "semantic-ui-react";
import {
  submitCreateAccountForm,
  onCreateAccountInputChange,
} from "../../store/actions";

import Header from "../Header";
import Footer from "../Footer";

const User = () => (
  <div className="user-container">
    <Header />
    <div className="user-body">
      <Input>TEST TEST TEST</Input>
      <Button>OK!</Button>
    </div>
    <Footer />
  </div>
);

const mapState = (state) => ({
  createAccount: state.user.createAccount,
  password: state.user.createAccount.password,
  password_confirmation: state.user.createAccount.password_confirmation,
  message: state.user.message,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(User);
