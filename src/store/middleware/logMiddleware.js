import axios from "axios";

import {
  ON_FORM_LOGIN,
  onFormLoginError,
  onFormLoginSuccess,
  submitCreateAccountFormError,
  submitCreateAccountFormSuccess,
  SUBMITCREATEACCOUNTFORM,
  LOGOUT,
  logoutSuccess,
} from "../actions";
const url = "http://localhost:3001";
const logMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case SUBMITCREATEACCOUNTFORM: {
      //const url = process.env.REACT_APP_URL;
      axios({
        method: "post",
        url: `${url}/signup`,
        data: store.getState().user.createAccount,
        //withCredentials: true,
      })
        .then((res) => {
          store.dispatch(submitCreateAccountFormSuccess(res.data));
        })
        .catch((error) => {
          store.dispatch(submitCreateAccountFormError(error));
        });
      break;
    }

    case ON_FORM_LOGIN: {
      //const url = process.env.REACT_APP_URL;

      const data = store.getState().user.loginData;
      axios({
        method: "post",
        url: `${url}/login`,
        data,
        withCredentials: true,
      })
        .then((res) => {
          if (res.data === "cant find user") {
            store.dispatch(
              onFormLoginError("E-mail and password doesn't matchs")
            );
          } else {
            store.dispatch(
              onFormLoginSuccess(
                res.data.info.id,
                res.data.info.email,
                "vous êtes connecté"
              )
            );
          }
        })
        .catch((err) => {
          store.dispatch(onFormLoginError(err, "utilisateur inconnu"));
        });
      break;
    }

    case LOGOUT: {
      //const url = process.env.REACT_APP_URL_DEV;
      //const url = process.env.REACT_APP_URL_PROD;
      axios({
        method: "post",
        url: `${url}/logout`,
      })
        .then((res) => {
          //console.log(res.data);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    }
    default:
  }
};

export default logMiddleware;
