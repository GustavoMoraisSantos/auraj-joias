"use client";
import SuppliersTable from "@/components/suppliers/SuppliersTable";
import NewSuppliersModal from "@/components/suppliers/NewSuppliersModal";
import { Button, Row } from "antd";
import { useState } from "react";

const SuppliersPage = () => {
  const [visibleSuppliersModal, setVisibleSuppliersModal] = useState(false);
  const [suppliers, setSuppliers] = useState([]); 

  return (
    <>
      <Row justify={"space-between"}>
        <h1>Listagem de fornecedores</h1>
        <Button onClick={() => setVisibleSuppliersModal(true)} type="primary">
          Incluir novo fornecedor
        </Button>
        <NewSuppliersModal
          setSuppliers={setSuppliers}
          suppliers={suppliers}
          visibleSuppliersModal={visibleSuppliersModal}
          setVisibleSuppliersModal={setVisibleSuppliersModal}
        />
      </Row>
      <div style={{ marginTop: "16px" }}>
        <SuppliersTable
            setSuppliers={setSuppliers}
            dataSource={suppliers}
        />
      </div>
    </>
  );
};




export default SuppliersPage;
