import { push } from "connected-next-router";
import { produce } from "immer";
import * as callApi from "@/utils/api";
//import Router from "next/router";
// 초기 상태
export const initialState = {
  id: "",
  loginYn: false,
  introMsg: "",
  nickName: ""
};

// 액션 타입
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USERINFO_SUCCESS = "USERINFO_SUCCESS";
export const USERINFO_ERROR = "USERINFO_ERROR";

// 액션 생성함수

// thunk 함수
// * 회원가입 API
export const joinApiCall = (params) => {
  // 함수 리턴
  return async (dispatch, getState) => {
    try {
      // 가짜 API 호출
      await callApi.createJoin(params);
      // 성공!
      alert("성공");

      // 로그인 페이지로 이동
      dispatch(push("/login"));
    } catch (e) {
      console.error(e);
    }
  };
};

// * 로그인 API 호출
export const loginApiCall = (params) => {
  // 함수 리턴
  return async (dispatch, getState) => {
    try {
      // 가짜 API 호출
      await callApi.login(params);

      const userInfo = await callApi.getUserInfo(params);
      console.log("userInfo ::", userInfo);
      // 성공!
      dispatch({ type: USERINFO_SUCCESS, userInfo });

      alert("로그인 성공");

      // 메인 페이지로 이동
      dispatch(push("/"));
    } catch (e) {
      alert("로그인 실패");
      dispatch({ type: USERINFO_ERROR });

      console.error(e);
    }
  };
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log("reducer state::", state);
    console.log("reducer action::", action);
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.loginYn = true;
        break;
      case LOGIN_ERROR:
        draft.loginYn = false;
        break;
      case USERINFO_SUCCESS:
        console.log("USERINFO_SUCCESS action.payload", action);
        draft.id = action.userInfo.id;
        draft.introMsg = action.userInfo.introMsg;
        draft.nickName = action.userInfo.nickName;
        break;
      case USERINFO_ERROR:
        console.log("USERINFO_ERROR action.payload", action);
        draft.id = initialState.id;
        draft.introMsg = initialState.introMsg;
        draft.nickName = initialState.nickName;
        break;
      default:
        break;
    }
  });

export default reducer;

//! 임시
//export const test = (aa) => ({ type: "test", bb: aa });
// export const joinAync = (values) => {
//   console.log("joinAync 실행!!!!!!!!!!");
//   return (dispatch, getState) => {
//     callApi.createJoin();
//     // setTimeout(() => {
//     //   console.log("joinAync 디스패치 직전");
//     //   dispatch(join(values));
//     //   console.log("joinAync 디스패치 완료");
//     //   dispatch(push("/"));
//     //   //Router.router.push("/");
//     // }, 1000);
//   };
// };

// //! 테스트
// export const testAync = () => {
//   console.log("실행!!!!!!!!!!");
//   return (dispatch, getState) => {
//     setTimeout(() => {
//       console.log("test 디스패치 직전");
//       dispatch(test());
//       console.log("test 디스패치 완료");
//     }, 1000);
//   };
// };
