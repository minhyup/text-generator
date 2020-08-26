import React from "react";
import { Input, InputNumber, Select } from "antd";
import { PlusCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

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
    <div>
      {inHidden ? (
        <PlusCircleOutlined onClick={onInput} />
      ) : (
        <>
          <Select
            style={{ width: 120 }}
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
            placeholder="몇 쿼터에 골을 넣으셨나요?"
          />
          <Input
            value={player}
            onChange={onPlayer}
            placeholder="골 넣은 선수 이름을 넣어주세요."
          />
          <CheckCircleOutlined onClick={onCreate} />
        </>
      )}
    </div>
  );
}

export default QuarterCreate;
