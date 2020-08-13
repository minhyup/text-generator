import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { joinApiCall } from "@/store/reducer/user";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const validateMessages = {
  required: "필수 입력 값입니다."
};

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};

const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { offset: 4, span: 20 } }
};

function MemberJoinForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  // 유효성 검사 후 실행
  const onFinish = (values) => {
    console.log(values);
    // thunk 호출
    dispatch(joinApiCall(values));
  };

  const onFinishFailed = (param) => {
    console.log(param);
  };

  return (
    <div>
      <span>회원가입 컴포넌트(비회원만 이용 가능)</span>
      <Form
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "id"]}
          label="ID"
          rules={[
            {
              required: true
            },
            () => ({
              validator(rule, value) {
                console.log(value);
                if (value && value.length >= 5) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    value ? "5자리 이상 입력해주세요." : ""
                  );
                }
              }
            })
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "nickName"]}
          label="닉네임"
          rules={[
            {
              required: true
            },
            () => ({
              validator(rule, value) {
                console.log(value);
                if (value && value.length >= 5) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    value ? "5자리 이상 입력해주세요." : ""
                  );
                }
              }
            })
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="패스워드"
          name={["user", "password"]}
          rules={[
            { required: true },
            () => ({
              validator(rule, value) {
                console.log(value);
                if (value && value.length >= 5) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    value ? "5자리 이상 입력해주세요." : ""
                  );
                }
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="패스워드 재확인"
          name={["user", "password2"]}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                console.log(value);
                console.log(getFieldValue(["user", "password"]));
                if (
                  value &&
                  value.length >= 5 &&
                  getFieldValue(["user", "password"]) === value
                ) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    value ? "패스워드가 일치하지 않습니다." : ""
                  );
                }
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name={["user", "introMsg"]} label="자기소개">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          {...tailLayout}
          name={["user", "check"]}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("격하게 동의해야 가입이 가능합니다.")
            }
          ]}
          valuePropName="checked"
        >
          <Checkbox>가입에 격하게 동의합니다.</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            size="large"
          >
            가입하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MemberJoinForm;
