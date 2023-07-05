import { Button, Col, Form, Input, Modal, Row } from "antd";

const NewCategoryModal = ({
  visibleCategoryModal,
  setVisibleCategoryModal,
  setCategories,
  categories,
}: {
  visibleCategoryModal: boolean;
  setVisibleCategoryModal: any;
  setCategories: any;
  categories: any;
}) => {
  const handleCancel = () => {
    setVisibleCategoryModal(false);
  };

  const handleSubmit = (values: { name: string; _id: string }) => {
    values._id = Math.random().toString(36).substring(2, 9);
    const updatedCategories = [...categories, values];
    console.log(updatedCategories);
    setCategories(updatedCategories);
  };

  return (
    <>
      <Modal
        title="Cadastro de nova categoria"
        open={visibleCategoryModal}
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
                label="Nome da categoria"
                name="name"
                style={{ width: "100%" }}
                rules={[
                  { required: true, message: "Inclua o nome da categoria!" },
                ]}
              >
                <Input placeholder="Ex. Alianças" style={{ width: "100%" }} />
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

export default NewCategoryModal;
