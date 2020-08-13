import { HYDRATE } from "next-redux-wrapper";
import { routerReducer } from "connected-next-router";
import { combineReducers } from "redux";
import user from "./user";

// (이전상태, 액션) 을 넘기면 => 다음 상태를 리턴해준다. 리듀서의 기본 원칙
const rootReducer = (state, action) => {
  console.log("rootreducer state::", state);
  switch (action.type) {
    case HYDRATE:
      console.log("hydrate!");
      return action.payload;
    default: {
      const combineReducer = combineReducers({ user, router: routerReducer });
      return combineReducer(state, action);
      // const createRootReducer = (history) =>
      //   combineReducers({
      //     router: connectRouter(history),
      //     user
      //   });
      // return createRootReducer;
    }
  }
};

export default rootReducer;
