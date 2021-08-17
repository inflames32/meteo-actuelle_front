import {
  INPUT_CITY_CHANGE,
  SUBMIT_WORLD,
  SUBMIT_FRANCE,
  GEOLOCALIZATION_HANDLE,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  ON_FORM_LOGIN_ERROR,
  ON_FORM_LOGIN_SUCCESS,
  ON_INPUT_CHANGE,
  SELECT_UNIT,
  ADDFOLLOWED,
  REMOVEFOLLOWED,
  ONCREATEACCOUNTINPUTCHANGE,
  SUBMITCREATEACCOUNTFORM,
  SUBMITCREATEACCOUNTFORMSUCCESS,
  SUBMITCREATEACCOUNTFORMERROR,
  ON_FORM_LOGIN,
  OPEN_MENU,
  CLOSE_MENU,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CHOOSE_COUNTRY,
  DELETE_CITY_ON_CLICK,
  API_USE_EFFECT_SUCCESS,
  API_USE_EFFECT_ERROR,
} from "../actions";

const initialState = {
  citiesByDefault: "Helsinki" /* {
    city: "Paris",
    choose: "&,fr",
  }, */,
  /*    {
      id: "2",
      city: "Londres",
      choose: "",
    },
     */
  coordonates: {
    lat: "",
    lon: "",
  },
  menuIsOpen: false,
  propIn: false,
  createAccount: {
    email: "",
    password: "",
    password_confirmation: "",
  },
  followed: false,
  isLogged: false,
  loadingLoginSubmit: false,
  loading: false,
  city: "",
  zipCode: "",
  // countryCode: "fr",
  units: "metric",
  API: {},
  messageSuccess: "",
  messageError: "",
  lang: "fr",
  apiSuccess: false,
  message: "",
  loginData: {
    email: "",
    password: "",
    id: "",
  },
  weatherAPI: "",
  choose: "france",
  APISuccessUseEffect: {},
  APISuccessUseEffectLoading: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case API_USE_EFFECT_SUCCESS:
      return {
        ...state,
        APISuccessUseEffect: {
          ...state.APISuccessUseEffect,
          ...action.payload,
        },
        APISuccessUseEffectLoading: false,
      };

    case CHOOSE_COUNTRY:
      return {
        ...state,
        choose: action.payload,
      };

    case OPEN_MENU:
      return {
        ...state,
        menuIsOpen: true,
      };

    case CLOSE_MENU:
      return {
        ...state,
        menuIsOpen: false,
        inProp: false,
      };

    case LOGOUT:
      return {
        ...state,
        message: "Déconnexion en cours...",
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        message: "Déconnexion réussie",
        isLogged: false,
        loginData: {
          email: "",
          password: "",
          id: "",
        },
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        message: "Erreur de déconnexion",
        isLogged: true,
      };

    case ONCREATEACCOUNTINPUTCHANGE:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          ...action.payload,
        },
      };

    case SUBMITCREATEACCOUNTFORM:
      return {
        ...state,
        loading: true,
      };

    case SUBMITCREATEACCOUNTFORMSUCCESS:
      return {
        ...state,
        loading: false,
        message: "Compte crée avec succès!",
      };

    case SUBMITCREATEACCOUNTFORMERROR:
      return {
        ...state,
        loading: false,
        message: "Impossible de créer le compte",
      };

    case ADDFOLLOWED:
      return {
        ...state,
        followed: true,
      };

    case REMOVEFOLLOWED:
      return {
        ...state,
        followed: !state.followed,
      };

    case DELETE_CITY_ON_CLICK:
      return {
        ...state,
        API: {},
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

    case GEOLOCALIZATION_HANDLE:
      return {
        ...state,
        loading: true,
        coordonates: {
          ...state.payload,
        },
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

    case ON_FORM_LOGIN:
      return {
        ...state,
        loadingLoginSubmit: true,
      };

    case ON_FORM_LOGIN_ERROR:
      return {
        ...state,
        loadingLoginSubmit: false,
        userId: "",
        isLogged: false,
        message: "Erreur de connexion à votre compte",
      };

    case ON_FORM_LOGIN_SUCCESS:
      return {
        ...state,
        loadingLoginSubmit: false,
        isLogged: true,
        loginData: {
          ...state.loginData,
          id: action.payload,
        },
        message: "Vous êtes connecté",
      };

    default:
      return state;
  }
};
