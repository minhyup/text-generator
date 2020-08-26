import React from "react";
import { Input, InputNumber, Select, Button } from "antd";
import { PlusCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const iconStyle = {
  fontSize: "20px"
};
function QuarterCreate({
  onCreate,
  onInput,
  inHidden,
  player,
  onScoreType,
  onPlayer,
  defulatType,
  quarter,
  onQuarter
}) {
  return (
    <div style={{ padding: "5px" }}>
      {inHidden ? (
        <PlusCircleOutlined
          onClick={onInput}
          style={{ ...iconStyle, color: "#495057" }}
        />
      ) : (
        <>
          <Select
            style={{ width: 120, marginRight: "10px" }}
            onChange={onScoreType}
            defaultValue={defulatType}
          >
            <Option value="Home">Home</Option>
            <Option value="Away">Away</Option>
          </Select>
          <InputNumber
            value={quarter}
            onChange={onQuarter}
            min={1}
            max={10}
            style={{ marginRight: "10px" }}
            placeholder="몇 쿼터에 골을 넣으셨나요?"
          />
          <span style={{ marginRight: "50px" }}>쿼터</span>
          <Input
            value={player}
            onChange={onPlayer}
            placeholder="골 넣은 선수 이름을 넣어주세요."
            maxLength={10}
            style={{ width: "80%", marginRight: "10px", marginTop: "10px" }}
          />
          <Button onClick={onCreate}>입력</Button>
        </>
      )}
    </div>
  );
}

export default QuarterCreate;
