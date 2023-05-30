import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./Pages/App/";
import reportWebVitals from "./reportWebVitals";

// Reducers
import tokenReducer from "./redux/reducer/tokenReducer";
import loginReducer from "./redux/reducer/loginReducer";
import orderReducer from "./redux/reducer/orderReducer";
import userReducer from "./redux/reducer/userReducer";
import menuReducer from "./redux/reducer/menuReducer";
import newsReducer from "./redux/reducer/newsReducer";
import courseReducer from "./redux/reducer/courseReducer";
import platformReducer from "./redux/reducer/platformReducer";
import newsCategoryReducer from "./redux/reducer/newsCategoryReducer";
import serviceReducer from "./redux/reducer/serviceReducer";
import costTypeReducer from "./redux/reducer/costTypeReducer";
import costReducer from "./redux/reducer/costReducer";
import adsReducer from "./redux/reducer/adsReducer";
import partnerReducer from "./redux/reducer/partnerReducer";
import faqReducer from "./redux/reducer/faqReducer";
import galleryReducer from "./redux/reducer/galleryReducer";
import webInfoReducer from "./redux/reducer/webinfoReducer";
import socialLinkReducer from "./redux/reducer/socialLinkReducer";
import bannerReducer from "./redux/reducer/bannerReducer";
import adsBannerReducer from "./redux/reducer/adsBannerReducer";
import pageReducer from "./redux/reducer/pageReducer";
// styles
import "./index.css";

const loggerMiddlaware = (store) => {
  return (next) => {
    return (action) => {
      // console.log("MyLoggerMiddleware: Dispatching ==> ", action);
      // console.log("MyLoggerMiddleware: State BEFORE : ", store.getState());
      const result = next(action);
      // console.log("MyLoggerMiddleware: State AFTER : ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  tokenReducer,
  loginReducer,
  orderReducer,
  userReducer,
  platformReducer,
  menuReducer,
  newsReducer,
  serviceReducer,
  courseReducer,
  faqReducer,
  newsCategoryReducer,
  costReducer,
  costTypeReducer,
  galleryReducer,
  partnerReducer,
  adsReducer,
  webInfoReducer,
  socialLinkReducer,
  bannerReducer,
  pageReducer,
  adsBannerReducer,
});

const middlewares = [loggerMiddlaware, thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
