import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import WeatherContainer from "./WeatherContainer";

const Weather = ({ apiSuccess }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {apiSuccess ? (
        <WeatherContainer />
      ) : (
        <div className="flex w-10/12 h-full items-center justify-center text-4xl">
          <span className="flex bg-white w-10/12 h-1/2 items-center justify-center text-4xl rounded-2xl shadow-xl ">
            En attente d'une ville à rechercher
          </span>
        </div>
      )}
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
