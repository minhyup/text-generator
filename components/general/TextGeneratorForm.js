import React, { useState, useRef } from "react";
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
  Modal
} from "antd";

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

const teamData = [{ teamId: "1", teamName: "해오름축구클럽" }];
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
  //  const [copyData, setCopyData] = useState("");
  //  const copyRef = useRef(null);

  // const onCopy = (e) => {
  //   console.log("onCopy");
  //   // console.log(e, copyRef);
  //   // //copyRef.current.select();
  //   // console.log(copyRef.current.textContent);
  //   setCopyData(copyRef.current.textContent);
  //   // console.log("copyData::", copyData);
  //   // //document.execCommand("copy");
  // };

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

    if (!rangeTime) {
      return;
    }

    const test = "aaaaa";
    Modal.success({
      title: "결과 생성 완료!",
      width: "500px",
      content: (
        <div>
          <TextGeneratorPopup result={values} test={test} />
        </div>
      )
    });
  };
  return (
    <div>
      {/* <span>{teamData[0].teamName}</span>
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
          <span>{teamData[0].teamName}</span>
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
            <Radio.Button value="3">3파전</Radio.Button>
            <Radio.Button value="4">4파전</Radio.Button>
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
            {memberData.map((item, index) =>
              index % 4 === 0 ? (
                <MemberGrid
                  key={item.id + index}
                  memberArr={memberData.slice(index, index + 4)}
                />
              ) : null
            )}
          </Checkbox.Group>
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
              <Button type="primary" htmlType="submit">
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
