import { Button, Col, Form, Input, InputNumber, Modal, Row } from "antd";

const NewProductsModal = ({
  visibleProductsModal,
  setVisibleProductsModal,
  setProducts,
  products,
}: {
  visibleProductsModal: boolean;
  setVisibleProductsModal: any;
  setProducts: any;
  products: any;
}) => {
  const handleCancel = () => {
    setVisibleProductsModal(false);
  };

  const handleSubmit = (values: { name: string; _id: string }) => {
    values._id = Math.random().toString(36).substring(2, 9);
    const updatedProducts = [...products, values];
    console.log(updatedProducts);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Modal
        title="Cadastro de novo produto"
        open={visibleProductsModal}
        destroyOnClose
        // onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        <Row>
          <Col span={24}>
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={(values) => {
                console.log("Finalizou o formulário ", values);
                handleSubmit(values);
                handleCancel();
              }}
              onFinishFailed={(values) =>
                console.log("Finalizou o formulário COM ERROS", values)
              }
              autoComplete="off"
            >
              <Form.Item
                label="Titulo do produto"
                name="name"
                style={{ width: "100%" }}
                rules={[
                  { required: true, message: "Inclua o titulo do produto!" },
                ]}
              >
                <Input placeholder="Ex. Aliança 18k" style={{ width: "100%" }} />
              </Form.Item>

                <Form.Item
                label="Valor do produto"
                name ="value"
                style={{ width: "100%" }}
                rules={[
                  { required: true, message: "Inclua o valor do produto!" },
                ]}
              >
                <InputNumber prefix='R$' type='number' placeholder="Ex. R$2.000" style={{ width: "100%" }} />
              </Form.Item>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Form.Item wrapperCol={{ span: 16 }}>
                  <Button onClick={() => handleCancel()} danger>
                    Cancelar
                  </Button>
                </Form.Item>

                <Form.Item
                  style={{ marginLeft: "12px" }}
                  wrapperCol={{ span: 16 }}
                >
                  <Button type="primary" htmlType="submit">
                    Salvar
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default NewProductsModal;
