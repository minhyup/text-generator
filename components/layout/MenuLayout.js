import React from "react";
import style from "@/styles/style.module.css";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
  FormOutlined,
  UsergroupAddOutlined,
  UserAddOutlined,
  UserOutlined
} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

function MenuLayout({ children }) {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <Link href="/">
            <a>
              <div className={style.logo} />
            </a>
          </Link>
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="gen" icon={<FormOutlined />}>
              <Link href="/gen">
                <a>결과 생성</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="team" icon={<UsergroupAddOutlined />}>
              <Link href="/team">
                <a>팀 등록</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="member" icon={<UserAddOutlined />}>
              <Link href="/member">
                <a>팀원 등록</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="join" icon={<UserOutlined />}>
              <Link href="/join">
                <a>회원가입</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="login" icon={<UserOutlined />}>
              <Link href="/login">
                <a>로그인</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="content-wrapper">{children}</div>
        </Content>
        <Footer>
          <div className="footer">Footer created by minhyup</div>
        </Footer>
      </Layout>
    </div>
  );
}

export default MenuLayout;
