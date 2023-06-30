import { Button, Col, Form, Input, Modal, Row } from "antd";

const NewCategoryModal = ({
  visibleCategoryModal,
  setVisibleCategoryModal,
}: {
  visibleCategoryModal: boolean;
  setVisibleCategoryModal: any;
}) => {
  const handleCancel = () => {
    setVisibleCategoryModal(false);
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
