import { ExceptionMap } from "antd/lib/result";

const sleep = (n) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, n);
  });
};

//가짜 API
export const createJoin = async (params) => {
  console.log("회원가입 API 입력 파라미터: ", params);
  await sleep(500);
  return {
    status: 200
  };
};

//가짜 API
export const login = async (params) => {
  console.log("로그인 API 입력 파라미터: ", params);

  const { id, password, keep } = params;

  await sleep(500);

  if (id === "minhyup" && password === "12345") {
    return {
      success: true
    };
  } else {
    throw new Error("로그인 실패");
  }
};

export const getUserInfo = async (params) => {
  console.log("사용자정보 API 입력 파라미터: ", params);

  await sleep(500);

  return { id: "minhyup", introMsg: "minhyup 가라 계정", nickName: "가라닉넴" };
};
