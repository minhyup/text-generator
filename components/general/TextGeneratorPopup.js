import React, { useState, useRef, useEffect } from "react";
import style from "@/styles/style.module.css";
import dayjs from "dayjs";
import { Button } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { codeTransfer, stringToBr } from "@/utils/commonUtils";
const memberData = [
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
function getJoinMemberNames(joinMemArr) {
  const memNames = joinMemArr.map((id) => {
    const found = memberData.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    return found.name + ". ";
  });
  console.log("memNames:::", memNames);
  return memNames;
}

function TextGeneratorPopup({ result }) {
  const {
    rangeTime,
    place,
    etcPlace,
    exeType,
    joinMember,
    description,
    rate,
    matchTeam
  } = result;
  //const transDescription = stringToBr(description);

  const [copyData, setCopyData] = useState("");
  const [copied, setCopied] = useState(false);
  const copyRef = useRef(null);

  useEffect(() => {
    console.log("oninit");
    // 생성한 결과를 textarea로 임시 복사
    setCopyData(copyRef.current.innerText);
  }, []);

  return (
    <div>
      <div>
        <h1>{dayjs(rangeTime[0]).format("YYYY년 MM월 DD일")} 운동 결과</h1>
      </div>
      <div className={style.row}>
        <div className={style.col1}>날짜</div>
        <div className={style.col2}>
          {dayjs(rangeTime[0]).format("YYYY년 MM월 DD일") +
            " " +
            dayjs(rangeTime[0]).format("HH") +
            "시 ~ " +
            dayjs(rangeTime[1]).format("HH") +
            "시"}
        </div>
      </div>
      <div className={style.row}>
        <div className={style.col1}>장소</div>
        <div className={style.col2}>{place !== "99" ? place : etcPlace}</div>
      </div>
      <div className={style.row}>
        <div className={style.col1}>경기형태</div>
        <div className={style.col2}>{codeTransfer("EXETYPE", exeType)}</div>
        <div className={style.col1}>{exeType !== "1" ? matchTeam : ""}</div>
      </div>
      <div className={style.row}>
        <div className={style.col1}>참여인원</div>
        <div className={style.col2}>{getJoinMemberNames(joinMember)}</div>
      </div>
      <div className={style.row}>
        <div className={style.col1}>운동강도</div>
        <div className={style.col2}>별 5개 중 {rate}개</div>
      </div>
      <div className={style.row}>
        <div className={style.col1}>추가설명</div>
        <div className={style.col2}>
          {description.split("\n").map((line) => {
            return (
              <span key={line}>
                {line}
                <br />
              </span>
            );
          })}
        </div>
      </div>

      <hr />
      <p ref={copyRef}>
        {dayjs(rangeTime[0]).format("YYYY년 MM월 DD일")} 운동 결과
        <br />
        <br />
        날짜:
        {dayjs(rangeTime[0]).format("YYYY년 MM월 DD일") +
          " " +
          dayjs(rangeTime[0]).format("HH") +
          "시 ~ " +
          dayjs(rangeTime[1]).format("HH") +
          "시"}
        <br />
        장소: {place === "99" ? etcPlace : place}
        <br />
        경기형태:
        {codeTransfer("EXETYPE", exeType) +
          "(" +
          (exeType !== "1" ? matchTeam : "") +
          ")"}
        <br />
        운동강도: 별 5개 중 {rate}개
        <br />
        참여인원:
        {getJoinMemberNames(joinMember)}
        <br />
        <br />
        {description.split("\n").map((line) => {
          return (
            <span key={line}>
              {line}
              <br />
            </span>
          );
        })}
      </p>
      <hr />

      <textarea
        value={copyData}
        onChange={({ target: { value } }) => {
          setCopyData(value);
          setCopied(false);
        }}
        style={{ display: "none" }}
      />
      <CopyToClipboard
        text={copyData}
        onCopy={(text, result) => {
          console.log("text::", text, "result:::", result);
          result ? setCopied(true) : setCopied(false);
        }}
      >
        <Button>복사하기</Button>
      </CopyToClipboard>

      {copied ? (
        <span style={{ color: "#40c057", marginLeft: "10px" }}>복사완료!</span>
      ) : null}
    </div>
  );
}

export default TextGeneratorPopup;
