import React from "react";
import { connect } from "react-redux";
import { DateTime } from "luxon";
import { selectUnit } from "../../../store/actions";

import "../../../styles/ApiSuccess.scss";

const ApiSuccess = ({ API }) => {
  var dt = DateTime.now();
  var f = { month: "long", day: "numeric", year: "numeric" };
  var date = dt.setLocale("fr").toLocaleString(f);
  const temp = API.main.temp.toFixed(1);
  const tempFeel = API.main.feels_like.toFixed(1);
  const windInKmByHour = Math.trunc(API.wind.speed * 3.6);
  const weatherIcon = `http://openweathermap.org/img/wn/${API.weather[0].icon}@2x.png`;
  //const flag = `https://www.countryflags.io/${API.sys.country}/flat/64.png`;
  const APIsysCountryToLower = API.sys.country;
  const APICountry = APIsysCountryToLower.toLowerCase();
  const flag = `https://flagcdn.com/w80/${APICountry}.png `;

  return (
    <div className="apiSuccess-container">
      <p>{}</p>
      <div className="apiSuccess-container-button">
        <div className="container-city_name">
          <span className="container-city_name-country">
            <span className="today">{date}</span>
            {API.name} ({APICountry})
          </span>
          <div>
            <img src={flag} alt={APICountry} className="flag" />
          </div>
        </div>
      </div>

      <div className="container-temp">
        <div className="container-temp-icon">
          <img className="img-weather" src={weatherIcon} alt="icon_weather" />
        </div>

        <div className="container-temp-temp">
          {temp}
          <span>°C</span>
        </div>
      </div>
      <details>
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
      </details>
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
});

const mapDispatch = (dispatch) => ({
  selectUnit: (units) => {
    dispatch(selectUnit(units));
  },
});

export default connect(mapState, mapDispatch)(ApiSuccess);
