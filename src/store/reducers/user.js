import {
  INPUT_CITY_CHANGE,
  SUBMIT_WORLD,
  SUBMIT_FRANCE,
  GEOLOCALIZATION_HANDLE,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  ON_INPUT_CHANGE,
  SELECT_UNIT,
  CHOOSE_COUNTRY,
  ON_CLICK_HOME_BTN,
} from "../actions";

const initialState = {
  coordonates: {
    lat: "",
    lon: "",
  },
  propIn: false,
  loadingLoginSubmit: false,
  loading: false,
  city: "",
  zipCode: "",
  units: "metric",
  API: {},
  lang: "fr",
  apiSuccess: false,
  message: "",
  weatherAPI: "",
  choose: "france",
  APISuccessUseEffect: {},
  APISuccessUseEffectLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_CLICK_HOME_BTN:
      return {
        ...state,
        city: "",
        choose: "france",
      };

    case CHOOSE_COUNTRY:
      return {
        ...state,
        choose: action.payload,
      };

    case SELECT_UNIT:
      return {
        ...state,
        units: action.payload,
      };

    case INPUT_CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };

    case SUBMIT_WORLD:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_FRANCE:
      return {
        ...state,
        loading: true,
      };

    case SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        messageSuccess: "Congratulations!",
        API: { ...action.payload },
        apiSuccess: true,
      };

    case SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        messageError: "Ville inconnue/pas de recherche",
        apiSuccess: false,
        API: {},
      };

    case ON_INPUT_CHANGE:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...action.payload,
        },
        isLogged: false,
      };

    default:
      return state;
  }
};
