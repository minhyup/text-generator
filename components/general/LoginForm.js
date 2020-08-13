import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Checkbox, Button } from "antd";
import { loginApiCall } from "@/store/reducer/user";

const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

const tailLayout = {
  wrapperCol: { xs: { span: 24 }, sm: { offset: 4, span: 20 } }
};

function LoginForm() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("요청! 값::", values);
    // 로그인
    dispatch(loginApiCall(values));
  };

  return (
    <div>
      <Form {...layout} onFinish={onFinish}>
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
              message: "아이디를 입력하세요."
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력하세요."
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="keep" valuePropName="checked">
          <Checkbox>로그인 상태유지</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
