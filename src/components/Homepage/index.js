import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Weather from "../Weather";
import Footer from "../Footer";

import "../../styles/homepage.scss";

const Homepage = ({ APISuccessUseEffectLoading }) => (
  <div className="homepage-container">
    <Header />
    <div className="homepage-body">
      <SearchBar />
      <Weather />
    </div>
    <Footer />
  </div>
);
const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
  APISuccessUseEffectLoading: state.user.APISuccessUseEffectLoading,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Homepage);
