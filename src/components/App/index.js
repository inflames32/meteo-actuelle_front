import React from "react";
import { connect, Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

// == Import components
import Homepage from "../Homepage";

import Contact from "../Contact";

import Error404 from "../error404";

import store from "../../store";

import "../../styles/_reset.css";
import "../../styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//require("dotenv").config();
// == Composant
const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </Provider>
  );
};

const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
});

const mapDispatch = (dispatch) => ({});

// == Export
export default connect(mapState, mapDispatch)(App);
