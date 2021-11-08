import React from "react";
import { connect } from "react-redux";
import { BiSearch } from "react-icons/bi";
//import "../../styles/searchbar.scss";
import breakpoint from "../../Commons/breakpoint";
import styled from "styled-components";

import {
  inputCityChange,
  submit,
  chooseCountry,
  submitFrance,
} from "../../store/actions";

const Select = styled.select`
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 50px;
  font-family: "Calibri", sans-serif;
  font-size: 1.4rem;
  text-align: center;
  background-color: lightgrey;
`;
const Option = styled.option`
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 50px;
  font-family: "Calibri", sans-serif;
  font-size: 1.4rem;
  text-align: center;
  background-color: lightgrey;
`;

const Input = styled.input`
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 50px;
  text-align: center;
  background-color: lightgrey;
`;

const ButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  width: 200px;
  display: inline-block;
  border: none;
  border-radius: 5px;
  height: 50px;
`;

const SearchbarContainer = styled.div`
  width: 800px;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  display: flex;
`;

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
    <SearchbarContainer>
      <form className="form-input" action="GET" onSubmit={handleSubmit}>
        {/* <div className="test"> */}
        <Select
          className="select other"
          name="country"
          value={choose}
          onChange={handleCountry}
        >
          <Option
            onChange={handleCountry}
            name="france"
            value="france"
            defaultChecked
          >
            En France
          </Option>
          <Option onChange={handleCountry} name="monde" value="world">
            Dans le monde
          </Option>
        </Select>

        <Input
          className="search-bar"
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
        <ButtonSubmit>
          <BiSearch />
        </ButtonSubmit>
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
    </SearchbarContainer>
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
