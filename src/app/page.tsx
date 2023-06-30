"use client";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import NewCategoryModal from "@/components/categories/NewCategoryModal";
import CategoriesTable from "@/components/categories/CategoriesTable";

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
        <div className="site-layout-content" style={{ height: "100%" }}>
          <CategoriesTable />
        </div>
      </Content>
      <Footer
        style={{ textAlign: "center", background: "black", color: "white" }}
      >
        Auraj Joias ©2023
      </Footer>
    </Layout>
  );
};

export default App;
