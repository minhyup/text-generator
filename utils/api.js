const teamData = [
  { teamId: "1", teamName: "다올FC" },
  { teamId: "2", teamName: "해오름축구클럽" },
  { teamId: "3", teamName: "한화생명" }
];

const daolMemberData = [
  { id: "1", name: "강민협" },
  { id: "2", name: "고수창" },
  { id: "3", name: "권용민" },
  { id: "4", name: "김만재" },
  { id: "5", name: "김민식" },
  { id: "6", name: "노재현" },
  { id: "7", name: "류기현" },
  { id: "8", name: "박성배" },
  { id: "9", name: "백승훈" },
  { id: "10", name: "양정규" },
  { id: "11", name: "유석환" },
  { id: "12", name: "이경준" },
  { id: "13", name: "이동석" },
  { id: "14", name: "이민철" },
  { id: "15", name: "이용주" },
  { id: "16", name: "이태영" },
  { id: "17", name: "임학순" },
  { id: "18", name: "전휘제" },
  { id: "19", name: "정희창" },
  { id: "20", name: "최동희" },
  { id: "21", name: "최재영" },
  { id: "22", name: "탁형주" },
  { id: "23", name: "하진솔" },
  { id: "24", name: "한유민" },
  { id: "25", name: "허중무" },
  { id: "26", name: "홍우택" }
];
const heMemberData = [
  { id: "1", name: "강민협" },
  { id: "2", name: "강태봉" },
  { id: "3", name: "고정호" },
  { id: "4", name: "곽윤기" },
  { id: "5", name: "권인현" },
  { id: "6", name: "김권섭" },
  { id: "7", name: "김기석" },
  { id: "8", name: "김낙희" },
  { id: "9", name: "김상규" },
  { id: "10", name: "김성준" },
  { id: "11", name: "김성태" },
  { id: "12", name: "김양수" },
  { id: "13", name: "김재평" },
  { id: "14", name: "김태형" },
  { id: "15", name: "김학진" },
  { id: "16", name: "남황현" },
  { id: "17", name: "민문규" },
  { id: "18", name: "박영선" },
  { id: "19", name: "박중호" },
  { id: "20", name: "석민철" },
  { id: "21", name: "손홍대" },
  { id: "22", name: "시명관" },
  { id: "23", name: "신성식" },
  { id: "24", name: "심윤식" },
  { id: "25", name: "심훈" },
  { id: "26", name: "안명" },
  { id: "27", name: "양인모" },
  { id: "28", name: "엄용섭" },
  { id: "29", name: "염종원" },
  { id: "30", name: "오상일" },
  { id: "31", name: "우경진" },
  { id: "32", name: "유우상" },
  { id: "33", name: "이민우" },
  { id: "34", name: "이봉철" },
  { id: "35", name: "이상연" },
  { id: "36", name: "이승화" },
  { id: "37", name: "이연태" },
  { id: "38", name: "이현주" },
  { id: "39", name: "임종필" },
  { id: "40", name: "전현석" },
  { id: "41", name: "정원호" },
  { id: "42", name: "정태승" },
  { id: "43", name: "조경완" },
  { id: "44", name: "조성민" },
  { id: "45", name: "조영훈" },
  { id: "46", name: "주성" },
  { id: "47", name: "최동우" },
  { id: "48", name: "최제호" },
  { id: "49", name: "최필정" },
  { id: "50", name: "패키초롱" },
  { id: "51", name: "한승훈" },
  { id: "52", name: "홍영표" }
];

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

export const getMyTeamInfo = async () => {
  console.log("팀 정보 API ");
  await sleep(500);

  return teamData;
};

export const getMembers = async (id) => {
  console.log("멤버정보 API 입력 파라미터: ", id);

  await sleep(500);

  return id === "1" ? daolMemberData : id === "2" ? heMemberData : null;
};
