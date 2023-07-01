"use client";
import CategoriesTable from "@/components/categories/CategoriesTable";
import NewCategoryModal from "@/components/categories/NewCategoryModal";
import { Button, Row } from "antd";
import { useState } from "react";

const CategoriesPage = () => {
  const [visibleCategoryModal, setVisibleCategoryModal] = useState(false);

  return (
    <>
      <Row justify={"space-between"}>
        <h1>Listagem de categoria</h1>
        <Button onClick={() => setVisibleCategoryModal(true)} type="primary">
          Criar nova categoria
        </Button>
        <NewCategoryModal
          visibleCategoryModal={visibleCategoryModal}
          setVisibleCategoryModal={setVisibleCategoryModal}
        />
      </Row>
      <div style={{ marginTop: "16px" }}>
        <CategoriesTable />
      </div>
    </>
  );
};

export default CategoriesPage;
