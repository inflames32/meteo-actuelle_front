import React from "react";
import { connect } from "react-redux";
import { BiSearch } from "react-icons/bi";

import "../../styles/searchbar.scss";
//import propTypes from "prop-types";

import {
  inputCityChange,
  submit,
  chooseCountry,
  submitFrance,
} from "../../store/actions";

const SearchBar = ({
  loading,
  city,
  submitCitySearch,
  submitFrance,
  onInputChange,
  messageError,
  messageSuccess,
  selectZone,
  choose,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (choose === "france") {
      submitFrance();
    } else {
      submitCitySearch();
    }
  };
  const handleCountry = (evt) => {
    const worldZone = evt.target.value;
    selectZone(worldZone);
  };
  return (
    <div className="container-searchbar">
      <form className="form-input" action="GET" onSubmit={handleSubmit}>
        <div className="test">
          <div className="select-country">Vous cherchez :</div>
          <select
            className="select other"
            name="country"
            value={choose}
            onChange={handleCountry}
          >
            <option
              onChange={handleCountry}
              name="france"
              value="france"
              //defaultChecked
            >
              En France
            </option>
            <option onChange={handleCountry} name="monde" value="world">
              Dans le monde
            </option>
          </select>

          <input
            className="search-bar"
            placeholder="Nom de la ville"
            type="text"
            value={city}
            onChange={(evt) => {
              onInputChange(evt.target.value);
            }}
          />
        </div>
        {loading ? (
          <button type="submit" className="container-button " loading>
            ...chargement
          </button>
        ) : (
          !loading && (
            <button className="container-button " type="submit">
              <BiSearch />
            </button>
          )
        )}
      </form>
      <div>
        {messageError && <div>message: {messageError}</div>}
        {messageSuccess && <div>message: {messageSuccess}</div>}
      </div>
    </div>
  );
};

/* SearchBar.propTypes = {
  loading: propTypes.bool.isRequired,
  city: propTypes.string.isRequired,
  submitCitySearch: propTypes.func.isRequired,
  onInputChange: propTypes.func.isRequired,
  selectZone: propTypes.func.isRequired,
  choose: propTypes.string.isRequired,
  messageError: propTypes.string.isRequired,
  messageSuccess: propTypes.string.isRequired,
}; */

const mapState = (state) => ({
  city: state.user.city,
  cityZipCode: state.user.cityZipCode,
  units: state.user.units,
  data: state.user.data,
  loading: state.user.loading,
  choose: state.user.choose,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (changeInput) => {
    dispatch(inputCityChange(changeInput));
  },
  submitCitySearch: () => {
    dispatch(submit());
  },
  submitFrance: () => {
    dispatch(submitFrance());
  },
  selectZone: (selectZone) => {
    dispatch(chooseCountry(selectZone));
  },
});

export default connect(mapState, mapDispatch)(SearchBar);
