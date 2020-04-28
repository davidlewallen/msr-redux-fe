import React from "react";
import { Row, Col, Form, Input, Button, Typography, Card, Space } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Store } from "antd/lib/form/interface";

import { Content } from "../common/components/content";
import { login } from "../common/api/users";

const { Text } = Typography;

export const Login = () => {
  const history = useHistory();

  const handleLogin = (values: Store) => {
    login({
      email: values.email,
      password: values.password,
    })
      .then(() => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <Content>
      <Row>
        <Col xs={24}>
          <Card>
            <Form onFinish={handleLogin}>
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
                <Input.Password autoComplete="current-password" />
              </Form.Item>

              <Space>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>

                <Text>
                  Or, <Link to="/create-account">Sign up here</Link>
                </Text>
              </Space>
            </Form>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};
