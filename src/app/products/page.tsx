"use client";
import ProductsTable from "@/components/products/ProductsTable";
import NewProductsModal from "@/components/products/NewProductsModal";
import { Button, Row } from "antd";
import { useState } from "react";

const ProductsPage = () => {
  const [visibleProductsModal, setVisibleProductsModal] = useState(false);
  const [products, setProducts] = useState([]); 

  return (
    <>
      <Row justify={"space-between"}>
        <h1>Listagem de produtos</h1>
        <Button onClick={() => setVisibleProductsModal(true)} type="primary">
          Incluir novo produto
        </Button>
        <NewProductsModal
          setProducts={setProducts}
          products={products}
          visibleProductsModal={visibleProductsModal}
          setVisibleProductsModal={setVisibleProductsModal}
        />
      </Row>
      <div style={{ marginTop: "16px" }}>
        <ProductsTable
            setProducts={setProducts}
            dataSource={products}
        />
      </div>
    </>
  );
};

export default ProductsPage;
