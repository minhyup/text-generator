import React, { useState, useEffect } from "react";
import * as callApi from "@/utils/api";
import TextGeneratorPopup from "./TextGeneratorPopup";
import {
  Row,
  Col,
  Form,
  DatePicker,
  Radio,
  Input,
  Select,
  Checkbox,
  Rate,
  Button,
  Modal,
  InputNumber
} from "antd";
import QuarterContainer from "@/components/container/QuarterContainer";

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 3
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

const rangeConfig = {
  rules: [
    { type: "array", required: false, message: "운동 시간을 선택해주세요." }
  ]
};

function MemberGrid({ memberArr }) {
  console.log("MemberGrid::", memberArr);
  return (
    <div>
      <Row gutter={[24, 24]}>
        {memberArr.map((member) => (
          <Col span={6} key={member.id}>
            <Checkbox value={member.id} style={{ lineHeight: "32px" }}>
              {member.name}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function TextGeneratorForm() {
  const [etcPlaceYn, setEtcPlaceYn] = useState(true);
  const [exeTypeYn, setExeTypeYn] = useState(true);
  const [myTeamData, setMyTeamData] = useState(null);
  const [myTeamMember, setMyTeamMember] = useState(null);
  const [playerList, setPlayerList] = useState([]);
  // 마운트
  useEffect(() => {
    async function fetchData() {
      try {
        const resTeam = await callApi.getMyTeamInfo();
        setMyTeamData(resTeam);

        const resMem = await callApi.getMembers("1");
        setMyTeamMember(resMem);
      } catch (e) {}
    }

    fetchData();
  }, []);

  const onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
    // changedValues 키가 place
    console.log("place" in changedValues);

    // 장소를 선택했을 경우
    if ("place" in changedValues) {
      if (changedValues.place === "99") {
        setEtcPlaceYn(false);
      } else {
        setEtcPlaceYn(true);
      }
    } else if ("exeType" in changedValues) {
      if (changedValues.exeType === "1") {
        setExeTypeYn(true);
      } else {
        setExeTypeYn(false);
      }
    }
  };
  const onSubmitForm = (values) => {
    console.log("onSubmitForm::", values);

    const { rangeTime } = values;

    values.playerList = playerList;

    console.log("onSubmitForm:: after", values);

    if (!rangeTime) {
      return;
    }

    Modal.success({
      title: "결과 생성 완료!",
      width: "500px",
      content: (
        <div>
          <TextGeneratorPopup result={values} />
        </div>
      )
    });
  };

  const onSave = () => {
    Modal.error({
      title: "실패!",
      content: "준비중입니다."
    });
  };
  return (
    <div>
      {/* <span>{myTeamData[0].teamName}</span>
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row> */}
      <Form
        {...formItemLayout}
        onFinish={onSubmitForm}
        onValuesChange={onValuesChange}
        name="textGen"
        initialValues={{ rate: 3 }}
      >
        <Form.Item label="팀명">
          <span>{myTeamData ? myTeamData[0].teamName : null}</span>
        </Form.Item>
        <Form.Item label="구분" name="genType">
          <Radio.Group>
            <Radio.Button value="1">일정공지</Radio.Button>
            <Radio.Button value="2">운동결과</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="rangeTime" label="운동시간" {...rangeConfig}>
          <RangePicker showTime format="YYYY-MM-DD HH" />
        </Form.Item>
        <Form.Item
          label="장소"
          name="place"
          rules={[{ required: false, message: "장소를 선택해주세요." }]}
        >
          <Select placeholder="운동장을 선택해주세요.">
            <Option value="김포공설">김포공설</Option>
            <Option value="걸포공원">걸포공원</Option>
            <Option value="동을산리">동을산리</Option>
            <Option value="부천체육관">부천체육관</Option>
            <Option value="오정구장">오정구장</Option>
            <Option value="옥길구장">옥길구장</Option>
            <Option value="북부수자원">북부수자원</Option>
            <Option value="99">기타</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="etcPlace"
          wrapperCol={{ offset: 3 }}
          hidden={etcPlaceYn}
        >
          <Input placeholder="어디서 운동하셨나요?" />
        </Form.Item>
        <Form.Item name="exeType" label="경기형태">
          <Radio.Group>
            <Radio.Button value="1">자체경기</Radio.Button>
            <Radio.Button value="2">2파전</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="matchTeam"
          wrapperCol={{ offset: 3 }}
          hidden={exeTypeYn}
        >
          <Input placeholder="상대팀명은 뭔가요?" />
        </Form.Item>
        <Form.Item name="joinMember" label="회원">
          <Checkbox.Group>
            {myTeamMember
              ? myTeamMember.map((item, index) =>
                  index % 4 === 0 ? (
                    <MemberGrid
                      key={item.id + index}
                      memberArr={myTeamMember.slice(index, index + 4)}
                    />
                  ) : null
                )
              : null}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="스코어">
          <Form.Item
            name="score1"
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <InputNumber min={0} max={30} />
          </Form.Item>
          <div style={{ display: "inline-block" }}>
            <span> VS </span>
          </div>
          <Form.Item
            name="score2"
            style={{ display: "inline-block", marginLeft: "10px" }}
          >
            <InputNumber min={0} max={30} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="골">
          <QuarterContainer
            playerList={playerList}
            setPlayerList={setPlayerList}
          />
        </Form.Item>

        <Form.Item label="추가설명" name="description">
          <TextArea rows={4}></TextArea>
        </Form.Item>
        <Form.Item name="rate" label="운동강도">
          <Rate />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 12, offset: 3 },
            sm: { span: 12 }
          }}
        >
          <Row gutter={[16, 16]}>
            <Col>
              <Button type="primary" htmlType="submit">
                생성하기
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="button" onClick={onSave}>
                저장하기
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TextGeneratorForm;
