import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import dotenv from "dotenv";
import { APIUseEffect } from "../../store/actions";

// == Import components
import Homepage from "../Homepage";
import CreateAccount from "../CreateAccount";
import Contact from "../Contact";
import Login from "../Login";
import Error404 from "../error404";
import User from "../User";
import store from "../../store";

import "../../styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
require("dotenv").config();
// == Composant
const App = ({ APIUseEffect, APISuccessUseEffect }) => {
  useEffect(() => {
    console.log("useEffect");
    APIUseEffect();
  }, []);

  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={CreateAccount} />
        <Route exact path="/user/:id" component={User} />
        <Route component={Error404} />
      </Switch>
    </Provider>
  );
};

const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
});

const mapDispatch = (dispatch) => ({
  APIUseEffect: () => {
    dispatch(APIUseEffect());
  },
});

// == Export
export default connect(mapState, mapDispatch)(App);
