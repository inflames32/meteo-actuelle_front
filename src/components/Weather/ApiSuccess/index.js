import React from "react";
import { connect } from "react-redux";
import { HeartOutlined, HeartFilled, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import {
  selectUnit,
  addFollowed,
  removeFollowed,
  deleteCityOnClick,
} from "../../../store/actions";

import "../../../styles/ApiSuccess.scss";

const ApiSuccess = ({
  API,
  units,
  selectUnit,
  followed,
  addFollowed,
  removeFollowed,
  deleteCityOnClick,
}) => {
  const temp = API.main.temp.toFixed(1);
  const tempFeel = API.main.feels_like.toFixed(1);
  const windInKmByHour = Math.trunc(API.wind.speed * 3.6);
  const weatherIcon = `http://openweathermap.org/img/wn/${API.weather[0].icon}@2x.png`;
  const flag = `https://www.countryflags.io/${API.sys.country}/flat/64.png`;
  const handleBtnTrash = () => {
    console.log("je supprime cette ville");
    deleteCityOnClick();
  };
  const date = moment().locale("fr").format("dddd, Do MMMM ");

  return (
    <div className="apiSuccess-container">
      <div className="apiSuccess-container-button">
        <div className="container-city_name">
          <span className="container-city_name-country">
            <span className="today">{date}</span>
            {API.name} ({API.sys.country})
          </span>
          <div>
            <img src={flag} alt="country flag" className="flag" />
          </div>
        </div>
      </div>
      <div className="container-temp">
        <div className="container-temp-icon">
          <img src={weatherIcon} alt="icon_weather" />
        </div>

        <div className="container-temp-temp">
          {temp}
          <span>°C</span>
        </div>
      </div>
      <div className="container-temp_feel">
        Température ressentie: {tempFeel} °C
      </div>
      <div className="container-city_cloud">
        Couverture nuageuse: {API.weather[0].description}, {API.clouds.all} %
      </div>
      <div className="container-city_humidity">
        Humidité: {API.main.humidity} %
      </div>
      <div className="container-city_wind">Vent: {windInKmByHour} Km/h</div>
      <div className="container-city_visibility">
        Visibilité: {API.visibility} m
      </div>
      <div className="container-follow">
        {!followed && (
          <div className="container-heart" onClick={addFollowed}>
            <HeartOutlined />
          </div>
        )}
        {followed && (
          <div className="container-heart" onClick={removeFollowed}>
            <HeartFilled />
          </div>
        )}
        <div className="container-trash" onClick={handleBtnTrash}>
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  API: state.user.API,
  loading: state.user.loading,
  apiSuccess: state.user.apiSuccess,
  followed: state.user.followed,
});

const mapDispatch = (dispatch) => ({
  selectUnit: (units) => {
    dispatch(selectUnit(units));
  },

  addFollowed: () => {
    dispatch(addFollowed());
  },

  removeFollowed: () => {
    dispatch(removeFollowed());
  },

  deleteCityOnClick: () => {
    dispatch(deleteCityOnClick());
  },
});

export default connect(mapState, mapDispatch)(ApiSuccess);
