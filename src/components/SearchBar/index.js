import React from "react";
import { connect } from "react-redux";
import { BiSearch } from "react-icons/bi";

//import propTypes from "prop-types";
import {
  Button,
  InputGroup,
  Dropdown,
  FormControl,
  DropdownButton,
  Spinner,
} from "react-bootstrap";

import {
  inputCityChange,
  submit,
  chooseCountry,
  submitCityInFrance,
} from "../../store/actions";
import "../../styles/searchbar.scss";

const SearchBar = ({
  loading,
  city,
  submitCitySearch,
  onInputChange,
  messageError,
  messageSuccess,
  selectZone,
  choose,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (choose === "fr") {
      submitCityInFrance();
      console.log(submitCityInFrance);
    } else {
      submitCitySearch();
      console.log(submitCitySearch);
    }
  };
  const handleCountry = (evt) => {
    const worldZone = evt.target.value;
    selectZone(worldZone);
    console.log(`j'ai choisi ---${evt.target.value}---`);
  };
  return (
    <div className="container-searchbar">
      <form className="form-input" action="GET" onSubmit={handleSubmit}>
        {messageError && <div>message: {messageError}</div>}
        {messageSuccess && <div>message: {messageSuccess}</div>}
        <div className="test">
          <select
            className="select other"
            name="country"
            value={choose}
            onChange={handleCountry}
          >
            <option className="select-country" value>
              --- Vous cherchez ---
            </option>
            <option
              onChange={handleCountry}
              name="france"
              value="fr"
              defaultChecked
            >
              En France
            </option>
            <option onChange={handleCountry} name="monde" value="world">
              Dans le monde
            </option>
          </select>
          <div>
            <input
              className="search-bar"
              placeholder="Nom de la ville"
              type="text"
              value={city}
              onChange={(evt) => {
                onInputChange(evt.target.value);
              }}
              icon="search"
            />
          </div>
        </div>
        {loading ? (
          <Button type="submit" className="container-button " loading>
            ...chargement
          </Button>
        ) : (
          !loading && (
            <Button className="container-button " type="submit">
              <BiSearch />
            </Button>
          )
        )}
      </form>
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
  submitCityInFrance: () => {
    dispatch(submitCityInFrance());
  },
  selectZone: (selectZone) => {
    dispatch(chooseCountry(selectZone));
  },
});

export default connect(mapState, mapDispatch)(SearchBar);
