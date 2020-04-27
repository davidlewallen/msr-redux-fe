import React, { useState } from "react";
import { Row, Col, Card, Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { Store } from "antd/lib/form/interface";
import validatorjs from "validator";

import { Content } from "../common/components/content";

const { Text } = Typography;
const { isEmail } = validatorjs;

export const CreateAccount = () => {
  const [showVerifyCopy, setShowVerifyCopy] = useState(false);

  const [form] = Form.useForm();

  const handleCreateAccount = async (values: Store) => {
    if (!isEmail(values.email))
      return form.setFields([
        { name: "email", errors: ["Please input a valid email address"] },
      ]);

    try {
      await axios.post("http://localhost:8000/api/users", {
        user: { ...values },
      });

      setShowVerifyCopy(true);
    } catch (err) {
      if (err?.response?.status === 409) {
        form.setFields([
          {
            name: "email",
            errors: [
              "Email is already registered. Please choose a different one.",
            ],
          },
        ]);
      }
    }
  };

  return (
    <Content>
      <Row>
        <Col xs={24}>
          <Card>
            {showVerifyCopy ? (
              <Text>
                Please verify your account by following the instructions in the
                email sent to you.
              </Text>
            ) : (
              <Form onFinish={handleCreateAccount} form={form}>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email address",
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
            )}
          </Card>
        </Col>
      </Row>
    </Content>
  );
};
