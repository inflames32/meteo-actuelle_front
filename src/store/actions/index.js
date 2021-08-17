export const INPUT_CITY_CHANGE = "INPUT_CITY_CHANGE";
export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_ERROR = "SUBMIT_ERROR";
export const SELECT_UNIT = "SELECT_UNIT";

export const ON_CLICK_HOME_BTN = "ON_CLICK_HOME_BTN";

// = choix du pays
export const CHOOSE_COUNTRY = "CHOOSE_COUNTRY";
// = Submit en France
export const SUBMIT_FRANCE = "SUBMIT_FRANCE";
// =Submit dans le monde
export const SUBMIT_WORLD = "SUBMIT_WORLD";

export const onClickHomeBTN = () => ({
  type: ON_CLICK_HOME_BTN,
});

export const chooseCountry = (payload) => ({
  type: CHOOSE_COUNTRY,
  payload,
});

export const submitFrance = () => ({
  type: SUBMIT_FRANCE,
});

export const submit = () => ({
  type: SUBMIT_WORLD,
});

export const selectUnit = (payload) => ({
  type: SELECT_UNIT,
  payload,
});

export const inputCityChange = (payload) => ({
  type: INPUT_CITY_CHANGE,
  payload,
});

export const onInputChange = (payload) => ({
  type: ON_INPUT_CHANGE,
  payload,
});
export const submitSuccess = (payload) => ({
  type: SUBMIT_SUCCESS,
  payload,
});

export const submitError = () => ({
  type: SUBMIT_ERROR,
});
