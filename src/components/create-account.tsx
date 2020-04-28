import React from "react";
import { Row, Col, Card, Form, Input, Button } from "antd";
import { Store } from "antd/lib/form/interface";

import { Content } from "../common/components/content";
import { createAccount } from "../common/api/users";

export const CreateAccount = () => {
  const handleCreateAccount = async (values: Store) => {
    await createAccount({ email: values.email, password: values.password });
  };

  return (
    <Content>
      <Row>
        <Col xs={24}>
          <Card>
            <Form onFinish={handleCreateAccount}>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address.",
                  },
                ]}
              >
                <Input autoComplete="username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password.",
                  },
                ]}
              >
                <Input.Password autoComplete="new-password" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Create Account
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};
