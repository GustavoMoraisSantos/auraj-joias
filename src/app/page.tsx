"use client";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      title: "Home",
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: "An Application",
    },
  ];
  // <Breadcrumb.Item>Home</Breadcrumb.Item>
  //         <Breadcrumb.Item>List</Breadcrumb.Item>
  //         <Breadcrumb.Item>App</Breadcrumb.Item>

  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px", height: "100vh" }}>
        <Breadcrumb items={items} style={{ margin: "16px 0" }}></Breadcrumb>
        <div
          className="site-layout-content"
          style={{ background: "red", height: "100%" }}
        >
          Content washington
        </div>
      </Content>
      <Footer style={{ textAlign: "center", background: "yellow" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
