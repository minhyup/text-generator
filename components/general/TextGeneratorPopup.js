import React, { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { Button, Descriptions, Alert } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { codeTransfer, stringToBr } from "@/utils/commonUtils";

const memberData = [
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
// const memberData = [
//   { id: "1", name: "강민협" },
//   { id: "2", name: "강태봉" },
//   { id: "3", name: "고정호" },
//   { id: "4", name: "곽윤기" },
//   { id: "5", name: "권인현" },
//   { id: "6", name: "김권섭" },
//   { id: "7", name: "김기석" },
//   { id: "8", name: "김낙희" },
//   { id: "9", name: "김상규" },
//   { id: "10", name: "김성준" },
//   { id: "11", name: "김성태" },
//   { id: "12", name: "김양수" },
//   { id: "13", name: "김재평" },
//   { id: "14", name: "김태형" },
//   { id: "15", name: "김학진" },
//   { id: "16", name: "남황현" },
//   { id: "17", name: "민문규" },
//   { id: "18", name: "박영선" },
//   { id: "19", name: "박중호" },
//   { id: "20", name: "석민철" },
//   { id: "21", name: "손홍대" },
//   { id: "22", name: "시명관" },
//   { id: "23", name: "신성식" },
//   { id: "24", name: "심윤식" },
//   { id: "25", name: "심훈" },
//   { id: "26", name: "안명" },
//   { id: "27", name: "양인모" },
//   { id: "28", name: "엄용섭" },
//   { id: "29", name: "염종원" },
//   { id: "30", name: "오상일" },
//   { id: "31", name: "우경진" },
//   { id: "32", name: "유우상" },
//   { id: "33", name: "이민우" },
//   { id: "34", name: "이봉철" },
//   { id: "35", name: "이상연" },
//   { id: "36", name: "이승화" },
//   { id: "37", name: "이연태" },
//   { id: "38", name: "이현주" },
//   { id: "39", name: "임종필" },
//   { id: "40", name: "전현석" },
//   { id: "41", name: "정원호" },
//   { id: "42", name: "정태승" },
//   { id: "43", name: "조경완" },
//   { id: "44", name: "조성민" },
//   { id: "45", name: "조영훈" },
//   { id: "46", name: "주성" },
//   { id: "47", name: "최동우" },
//   { id: "48", name: "최제호" },
//   { id: "49", name: "최필정" },
//   { id: "50", name: "패키초롱" },
//   { id: "51", name: "한승훈" },
//   { id: "52", name: "홍영표" }
// ];
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
  //dayjs.locale("ko");
  const {
    rangeTime,
    place,
    etcPlace,
    exeType,
    joinMember,
    description,
    rate,
    matchTeam,
    playerList,
    score1,
    score2
  } = result;

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
      <Descriptions
        title={`${dayjs(rangeTime[0]).format("YYYY년 MM월 DD일")} (${dayjs(
          rangeTime[0]
        )
          .locale("ko")
          .format("ddd")}) 운동결과`}
        bordered
        column={1}
      >
        <Descriptions.Item label="일시">
          {dayjs(rangeTime[0]).format("YYYY년 MM월 DD일") +
            " " +
            dayjs(rangeTime[0]).format("HH") +
            "시 ~ " +
            dayjs(rangeTime[1]).format("HH") +
            "시"}
        </Descriptions.Item>
        <Descriptions.Item label="장소">
          {place === "99" ? etcPlace : place}
        </Descriptions.Item>
        <Descriptions.Item label="경기형태">
          {codeTransfer("EXETYPE", exeType) +
            (exeType !== "1" ? "(" + matchTeam + ")" : "")}
        </Descriptions.Item>
        <Descriptions.Item label="운동강도">
          {`별 5개 중 ${rate}`}
        </Descriptions.Item>
        <Descriptions.Item label="참여인원">
          {getJoinMemberNames(joinMember)}
        </Descriptions.Item>
        <Descriptions.Item label="스코어">
          {`${score1} VS ${score2} ${
            score1 > score2 ? "홈 승리" : score1 < score2 ? "홈 패배" : "무승부"
          }`}
        </Descriptions.Item>
        <Descriptions.Item label="골">
          {playerList.map((item, index) => (
            <span key={item.player + item.index}>
              [{item.type}] {item.quarter}쿼터 {item.player} 골<br />
            </span>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="비고">
          {description.split("\n").map((line) => {
            return (
              <span key={line}>
                {line}
                <br />
              </span>
            );
          })}
        </Descriptions.Item>
      </Descriptions>

      <div>
        <hr />
        <Alert
          message="복사하기 버튼을 클릭하면 아래 내용이 복사 됩니다."
          type="info"
        />
        <hr />
        <p ref={copyRef}>
          {dayjs(rangeTime[0]).format("YYYY년 MM월 DD일")}
          {`(${dayjs(rangeTime[0]).locale("ko").format("ddd")})`} 운동결과
          <br />
          <br />
          일시:
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
            (exeType !== "1" ? "(" + matchTeam + ")" : "")}
          <br />
          운동강도: 별 5개 중 {rate}개
          <br />
          참여인원:
          {getJoinMemberNames(joinMember)}
          <br />
          스코어:
          {`${score1} VS ${score2} ${
            score1 > score2 ? "홈 승리" : score1 < score2 ? "홈 패배" : "무승부"
          }`}
          <br />
          {playerList.map((item, index) => (
            <span key={item.player + item.index}>
              [{item.type}] {item.quarter}쿼터 {item.player} 골<br />
            </span>
          ))}
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
      </div>

      <div style={{ marginTop: "10px" }}>
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
          <span style={{ color: "#40c057", marginLeft: "10px" }}>
            복사완료!
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default TextGeneratorPopup;
