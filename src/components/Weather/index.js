import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ApiSuccess from "./WeatherContainer";

import "../../styles/weather.scss";
import breakpoint from "../../Commons/breakpoint";
import styled from "styled-components";
const WeatherContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    width: 600px;
    height: 800px;
    background-color: grey;
    text-align: center;
    text-decoration: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 600px;
    height: 800px;
    background-color: grey;
    text-align: center;
    text-decoration: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
    height: 500px;
    background-color: grey;
    text-align: center;
    text-decoration: none;
  }
`;

const Weather = ({ apiSuccess }) => {
  return (
    <div className="container-weather">
      <WeatherContainer>{apiSuccess && <ApiSuccess />}</WeatherContainer>
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
