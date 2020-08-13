import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import {
  createRouterMiddleware,
  initialRouterState
} from "connected-next-router";
import Router from "next/router";
import { format } from "url";
import rootReducer from "./reducer";

//error - ReferenceError: document is not defined
//import { createBrowserHistory } from "history";
//export const history = createBrowserHistory();

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action);
  return next(action);
};

const configureStore = (context) => {
  console.log("confirger Store context, Router==>", context, Router);

  // 라우터 미들웨어
  const routerMiddleware = createRouterMiddleware();
  const { asPath, pathname, query } = context.ctx || Router.router || {};
  let initialState;
  if (asPath) {
    const url = format({ pathname, query });
    initialState = {
      router: initialRouterState(url, asPath)
    };
  }

  //미들 웨어 정의
  const middlewares = [reduxThunk, routerMiddleware, loggerMiddleware];

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
