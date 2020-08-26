import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { List, Typography } from "antd";
const iconStyle = {
  fontSize: "18px"
};
function QuarterItem({ playerList, scoreType, quarter, onDeleteItem }) {
  return (
    <div>
      <List
        dataSource={playerList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`[${item.type}] ${item.quarter}쿼터`}
              description={item.player}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default QuarterItem;
