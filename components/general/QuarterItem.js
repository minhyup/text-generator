import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

function QuarterItem({ playerList, scoreType, quarter, onDeleteItem }) {
  return (
    <div>
      <ul>
        {playerList.map((item, index) => (
          <li key={item.player + index}>
            [{item.type}] {item.quarter}쿼터 {item.player}
            <CloseCircleOutlined onClick={() => onDeleteItem(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuarterItem;
