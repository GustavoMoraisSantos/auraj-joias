"use client";
import CategoriesTable from "@/components/categories/CategoriesTable";
import NewCategoryModal from "@/components/categories/NewCategoryModal";
import { Button, Row } from "antd";
import { useState } from "react";

const CategoriesPage = () => {
  const [visibleCategoryModal, setVisibleCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);

  return (
    <>
      <Row justify={"space-between"}>
        <h1>Listagem de categoria</h1>
        <Button onClick={() => setVisibleCategoryModal(true)} type="primary">
          Incluir nova categoria
        </Button>
        <NewCategoryModal
          setCategories={setCategories}
          categories={categories}
          visibleCategoryModal={visibleCategoryModal}
          setVisibleCategoryModal={setVisibleCategoryModal}
        />
      </Row>
      <div style={{ marginTop: "16px" }}>
        <CategoriesTable
          setCategories={setCategories}
          dataSource={categories}
        />
      </div>
    </>
  );
};

export default CategoriesPage;
