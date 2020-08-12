import { produce } from "immer";

// 초기 상태
export const initialState = {
  id: "",
  loginYn: false,
  introMsg: "",
  nickName: ""
};

// 액션 타입
export const JOIN_REQUEST = "JOIN_REQUEST";

// 액션 생성함수
export const test = (aa) => ({ type: "test", bb: aa });
export const join = (payload) => ({ type: JOIN_REQUEST, payload });

// thunk 함수
export const testAync = () => {
  console.log("실행!!!!!!!!!!");
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log("1초후!");
      dispatch(test());
    }, 1000);
  };
};

export const joinAync = (values) => {
  console.log("joinAync 실행!!!!!!!!!!");
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log("1초후!");
      dispatch(join(values));
    }, 1000);
  };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log("reducer state::", state);
    console.log("reducer action.type::", action.type);
    switch (action.type) {
      case JOIN_REQUEST:
        console.log("action.payload", action.payload);
      case "test":
        draft.userName = "bbb";
        break;
      default:
        break;
    }
  });

export default reducer;
