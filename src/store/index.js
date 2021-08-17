// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "./reducers";
import submitCity from "./middleware/submitCity";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    submitCity

    // secondMiddleware,
  )
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
