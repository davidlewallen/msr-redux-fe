import React from "react";
import { Row, Col, Card, Form, Input, Button } from "antd";
import axios from "axios";

import { Content } from "../common/components/content";

export const CreateAccount = () => {
  // @ts-ignore
  const handleCreateAccount = async (values) => {
    await axios.post("http://localhost:8000/api/users", {
      user: { ...values },
    });
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
                <Input />
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
                <Input.Password />
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
