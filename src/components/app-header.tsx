import React from "react";
import { Layout, Menu, Button } from "antd";
import { ClickParam } from "antd/lib/menu";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import "./app-header.css";

const StyledMenu = styled(Menu)`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

interface IProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen(value: boolean): void;
}

export const AppHeader = ({ isMobileNavOpen, setIsMobileNavOpen }: IProps) => {
  const history = useHistory();

  const handleNavigation = (event: ClickParam) => {
    if (event.key === "home") return history.push("/");

    return history.push(`/${event.key}`);
  };

  return (
    <Layout.Header>
      <StyledMenu
        onClick={handleNavigation}
        mode="horizontal"
        className="app-header-menu"
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="create-account">Create Account</Menu.Item>
        <Menu.Item key="login">Log In</Menu.Item>
      </StyledMenu>
      <Button
        type="primary"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? "Close" : "Open"}
      </Button>
    </Layout.Header>
  );
};
