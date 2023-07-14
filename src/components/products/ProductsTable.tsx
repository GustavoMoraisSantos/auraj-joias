import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
}
interface IPros {
  setProducts: any;
  dataSource: any;
}

const ProductsTable = ({ setProducts, dataSource }: IPros) => {
  const handleDeleteItem = (record: any) => {
    const updatedData = dataSource.filter(
      (item: any) => item._id !== record._id
    );
    setProducts(updatedData);
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "titulo do produto",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ações",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => console.log("EDITOU")} />
          <DeleteOutlined
            style={{ color: "red" }}
            onClick={() => handleDeleteItem(record)}
          />
        </Space>
      ),
    },
  ];

  const data: DataType[] = dataSource;

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

export default ProductsTable;
