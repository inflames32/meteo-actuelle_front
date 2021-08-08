import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ApiSuccess from "./ApiSuccess";

import "../../styles/weather.scss";

const Weather = ({ apiSuccess }) => {
  return (
    <div className="container-weather">
      <div className="container-title">{apiSuccess && <ApiSuccess />}</div>
    </div>
  );
};

Weather.propTypes = {
  apiSuccess: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
  city: state.user.city,
  units: state.user.units,
  API: state.user.API,
  loading: state.user.loading,
  apiSuccess: state.user.apiSuccess,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Weather);
