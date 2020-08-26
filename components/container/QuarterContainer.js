import React, { useState } from "react";
import QuarterItem from "@/components/general/QuarterItem";
import QuarterCreate from "@/components/general/QuarterCreate";

const defulatType = "Home";
const defulatQuater = 1;
function QuarterContainer({ playerList, setPlayerList }) {
  //const [playerList, setPlayerList] = useState([]);
  const [inHidden, setInHidden] = useState(true);
  const [player, setPlayer] = useState("");
  const [scoreType, setScoreType] = useState(defulatType);
  const [quarter, setQuarter] = useState(defulatQuater);

  // 데이터 생성시
  const onCreate = (e) => {
    console.log("onCreate! player:", player, playerList);
    // 추가하면 인풋 영역 히든
    setInHidden(true);

    // 추가할 객체 생성
    const _playItem = {};
    _playItem.type = scoreType;
    _playItem.quarter = quarter;
    _playItem.player = player;

    console.log(_playItem);

    // 골 넣은 선수 추가
    setPlayerList(playerList.concat(_playItem));

    // 골 넣은 선수명, 쿼터 초기화
    setPlayer("");
    setQuarter(defulatQuater);
    setScoreType(defulatType);
  };

  // + 버튼 클릭시
  const onInput = (e) => {
    console.log("onInput!");
    setInHidden(false);
  };

  // 구분 선택시
  const onScoreType = (value) => {
    console.log("onScoreType!", value);
    setScoreType(value);
  };

  // 쿼터 입력시
  const onQuarter = (e) => {
    console.log("onQuarter", e);
    setQuarter(e);
  };

  // 선수명 입력시
  const onPlayer = (e) => {
    console.log("onPlayer!", e.target.value);
    setPlayer(e.target.value);
  };

  const onDeleteItem = (item) => {
    console.log("onDeleteItem:::", item);
    setPlayerList(playerList.filter((play, index) => index !== item));
  };

  return (
    <div>
      <QuarterCreate
        onCreate={onCreate}
        onInput={onInput}
        inHidden={inHidden}
        player={player}
        onPlayer={onPlayer}
        onScoreType={onScoreType}
        defulatType={defulatType}
        onQuarter={onQuarter}
        quarter={quarter}
      />
      <QuarterItem
        playerList={playerList}
        scoreType={scoreType}
        quarter={quarter}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default QuarterContainer;
