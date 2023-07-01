"use client";
import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  TagsOutlined,
  InboxOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";
import style from "antd/es/alert/style";
import { useRouter } from "next/navigation";

const { Header, Content, Footer } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

const LayoutDefault: React.FC = ({ children }: any) => {
  const router = useRouter();
  // useEffect(() => {
  //   // Always do navigations after the first render
  //   router.push("/");
  // }, []);
  // useEffect(() => {
  //   // The counter changed!
  //   console.log("e");
  // }, [router.query.counter]);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("Dashboard", "", <PieChartOutlined />),
    getItem("Produtos", "products", <InboxOutlined />),
    getItem("Categorias", "categories", <TagsOutlined />),
    getItem("Fornecedores", "suppliers", <TeamOutlined />),
  ];

  const handleChangeItem = (key: string) => {
    router.push(`/${key}`);
  };

  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          onClick={(e) => {
            handleChangeItem(e.key);
          }}
          style={{ width: "100%" }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["dashboard"]}
          items={items}
        />
      </Header>
      <Content style={{ padding: "0px 50px", height: "100vh" }}>
        <Breadcrumb
          items={[{ title: "sample" }, { title: "sample 2" }]}
          style={{ margin: "16px 0" }}
        ></Breadcrumb>
        <div
          className="site-layout-content"
          style={{ height: "100%", padding: "20px", background: "#837f7f26" }}
        >
          {children}
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

export default LayoutDefault;
