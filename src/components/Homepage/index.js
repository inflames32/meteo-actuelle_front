import React from "react";
import { connect } from "react-redux";
import Header from "../Header";

import Weather from "../Weather";

const Homepage = () => (
  <div className="h-screen bg-gray-400 ">
    <Header />
    <Weather />
    {/* <Footer /> */}
  </div>
);
const mapState = (state) => ({
  APISuccessUseEffect: state.user.APISuccessUseEffect,
  APISuccessUseEffectLoading: state.user.APISuccessUseEffectLoading,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Homepage);
