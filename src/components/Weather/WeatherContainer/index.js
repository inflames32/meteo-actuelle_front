import React from "react";
import { connect } from "react-redux";
import { DateTime } from "luxon";
import { selectUnit } from "../../../store/actions";

const WeatherContainer = ({ API }) => {
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
    <div
      className="xs:w-full flex xs:flex-col text-xl 
    md:flex-row md:w-10/12 m-2 justify-center 
    bg-white items-center
    xs:h-full 
    sm:h-full 
    md:h-1/2 
    rounded-xl    
    pt-16  
  "
    >
      <div className="flex flex-col xs:w-full sm:w-4/12">
        <div className="bg-green-200 flex w-full xs:w-full flex-col items-center justify-center">
          <div className="bg-green-200 flex w-full flex-col items-center justify-center">
            <span className="today">{date}</span>
            {API.name} ({APICountry})
          </div>
          <img src={flag} alt={APICountry} className="flag" />
          <div className="">
            <img className="" src={weatherIcon} alt="icon_weather" />
          </div>
          <div className=" bg-gray-400">
            {temp}
            <span>°C</span>
          </div>
        </div>
      </div>

      <div className="flex h-full  xs:flex-row bg-gray-200 w-full justify-center flex-wrap ">
        <div className="w-8/12 bg-white rounded-xl">
          Température ressentie: {tempFeel} °C
        </div>
        <div className="w-8/12 bg-white rounded-xl">
          Couverture nuageuse: {API.weather[0].description}, {API.clouds.all} %
        </div>
        <div className="w-8/12 bg-white rounded-xl">
          Humidité: {API.main.humidity} %
        </div>
        <div className="w-8/12 bg-white rounded-xl">
          Vent: {windInKmByHour} Km/h
        </div>
        <div className="w-8/12 bg-white rounded-xl">
          Visibilité: {API.visibility} m
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
});

const mapDispatch = (dispatch) => ({
  selectUnit: (units) => {
    dispatch(selectUnit(units));
  },
});

export default connect(mapState, mapDispatch)(WeatherContainer);
