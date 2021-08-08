import axios from "axios";

import {
  SUBMIT,
  submitError,
  submitSuccess,
  SUBMIT_CITY_IN_FRANCE,
  API_USE_EFFECT,
  APIUseEffectSuccess,
  APIUseEffectError,
} from "../actions";

const APIUseEffect = (store) => (next) => (action) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const city = store.getState().user.citiesByDefault;
  const country = store.getState().user.citiesByDefault.choose;
  const { units } = store.getState().user;
  const { lang } = store.getState().user;
  next(action);
  switch (action.type) {
    case API_USE_EFFECT: {
      axios({
        method: "get",
        /*         url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=${lang}`, */
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=183deee9a13cf0287c807a50c35417d1&lang=${lang}`,
      })
        .then((res) => {
          //console.log(res.data, "reponse ici");
          store.dispatch(APIUseEffectSuccess(res.data));
        })
        .catch((e) => {
          console.error(e);
          store.dispatch(APIUseEffectError("useEffectError"));
        });
      break;
    }
    default:
  }
};
export default APIUseEffect;
