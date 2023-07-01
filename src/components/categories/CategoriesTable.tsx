import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Space, Table, Tag } from "antd";
import space from "antd/es/space";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import NewCategoryModal from "./NewCategoryModal";
import { useState } from "react";
import { config } from "process";

interface DataType {
  key: string;
  name: string;
  status: string;
}

const CategoriesTable = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Nome da categoria",
      dataIndex: "name",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "status ",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => console.log("EDITOU")} />
          <DeleteOutlined
            style={{ color: "red" }}
            onClick={() => console.log("REMOVEU")}
          />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Alianças",
      status: "Ativo",
    },
    {
      key: "2",
      name: "Colares",
      status: "Inativo",
    },
    {
      key: "3",
      name: "Anéis",
      status: "Ativo",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={data}
      />
    </>
  );
};

export default CategoriesTable;
