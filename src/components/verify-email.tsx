import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Card } from "antd";
import { useLocation, Link, useHistory } from "react-router-dom";
import queryString from "query-string";

import { Content } from "../common/components/content";
import { verifyEmail } from "../common/api/users";

const { Text } = Typography;

interface IErrors {
  id?: string;
  key?: string;
  user?: string;
}

export const VerifyEmail = () => {
  const location = useLocation();
  const history = useHistory();

  const [isValid, setIsValid] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [errors, setErrors] = useState<IErrors>({});

  const { id = "", key = "" } = queryString.parse(location.search);

  useEffect(() => {
    const verifyUsersEmail = async () => {
      if (id === null || id === "" || Array.isArray(id))
        return history.push("/");
      if (key === null || key === "" || Array.isArray(key))
        return history.push("/");

      try {
        await verifyEmail(id, key);

        setIsValid(true);
        setTimeout(() => history.replace("/login"), 5000);
      } catch (err) {
        const { errors } = err?.response?.data ?? { errors: {} };
        const hasErrors = Object.keys(errors).length;

        if (!hasErrors) return;

        setErrors(errors);
      } finally {
        setIsValidating(false);
      }
    };

    verifyUsersEmail();
  }, [id, key, history]);

  const hasErrors = errors.id || errors.key;

  return (
    <Content>
      <Row>
        <Col sm={24} md={{ span: 12, offset: 6 }}>
          <Card>
            {isValidating && (
              <Text>Please wait while we validate your email.</Text>
            )}

            {isValid && (
              <Text>
                Thank you for verifying your email. You will be redirected to
                the login page in 5 seconds or{" "}
                <Link to="/login">Click here</Link> to be redirected
                immediately.
              </Text>
            )}

            {hasErrors ||
              (errors?.user?.match(
                /does not exist|does not match|!already verified/i
              ) && (
                <Text>
                  Something went wrong with verifying your email. Please try
                  clicking the link provided in your email again.
                </Text>
              ))}

            {(errors?.user?.match(/already verified/i) ?? "") && (
              <Text>
                User has already been verified. Please{" "}
                <Link to="/login">log in</Link> here
              </Text>
            )}
          </Card>
        </Col>
      </Row>
    </Content>
  );
};
