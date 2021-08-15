import React from "react";
import { connect } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Weather from "../Weather";
import Footer from "../Footer";
import ApiUseEffect from "../Weather/ApiUseEffect";

import "../../styles/homepage.scss";

const Homepage = ({ APISuccessUseEffectLoading }) => (
  <div className="homepage-container">
    <Header />
    <div className="homepage-body">
      {APISuccessUseEffectLoading ? (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="useEffect_weather">
          <ApiUseEffect />
        </div>
      )}
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
