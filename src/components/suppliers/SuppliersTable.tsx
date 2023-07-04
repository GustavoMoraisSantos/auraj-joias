import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Space, Table, Tag } from "antd";
import space from "antd/es/space";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import NewSuppliersModal from "./NewSuppliersModal";
import { useState } from "react";
import { config } from "process";

interface DataType {
  key: string;
  name: string;
  status: string;
}

const SuppliersTable = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Nome do fornecedor",
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
      name: "Bourboun joias",
      status: "Ativo",
    },
    {
      key: "2",
      name: "Joias Baccule",
      status: "Ativo",
    },
    {
      key: "3",
      name: "Pandora",
      status: "Inativo",
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

export default SuppliersTable;
