import React from "react";
import { connect } from "react-redux";

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
    <div className="flex w-full justify-center items-center font-sans">
      <form
        className="w-full md:w-4/5 text-2xl flex flex-col md:flex-row justify-center items-center"
        action="GET"
        onSubmit={handleSubmit}
      >
        <select
          className="w-full rounded-md  text-center m-1"
          name="country"
          value={choose}
          onChange={handleCountry}
        >
          <option
            className="w-full rounded-md  text-center mx-1"
            onChange={handleCountry}
            name="france"
            value="france"
            defaultChecked
          >
            En France
          </option>
          <option
            className="w-full rounded-md  text-center mx-1"
            onChange={handleCountry}
            name="monde"
            value="world"
          >
            Dans le monde
          </option>
        </select>

        <input
          className="w-full rounded-md text-center mx-1"
          placeholder="Nom de la ville"
          type="text"
          value={city}
          onChange={(evt) => {
            onInputChange(evt.target.value);
          }}
        />
        {/* {loading ? ( 
          <button type="submit" className="container-button " loading>
            ...chargement
          </button>
          ) : ( */}

        {/*   )} */}
        {/*  </div> */}
        {/* {(!city && !loading) ||
          (city && loading && (
            <ButtonSubmit type="submit" className="container-button ">
              désactivé
            </ButtonSubmit>
          ))}

        {city && !loading && (
          <ButtonSubmit >
            <BiSearch />
          </ButtonSubmit>
        )}

        {city && loading && (
          <ButtonSubmit type="submit" className="container-button ">
            ...chargement
          </ButtonSubmit>
        )} */}
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
