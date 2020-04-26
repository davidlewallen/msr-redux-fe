import React from "react";
import { Layout, Menu, Button } from "antd";
import { ClickParam } from "antd/lib/menu";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const StyledMenuItem = styled(Menu.Item)``;

const StyledMenu = styled(Menu)`
  background-color: inherit;
  color: white;

  ${StyledMenuItem} {
    border-bottom: none;
  }
`;

const StyledButton = styled(Button)`
  padding: 0px;

  // @ts-ignore
  ${MenuFoldOutlined} ${MenuUnfoldOutlined} {
    font-size: 24px;
  }

  ${MenuFoldOutlined} ${MenuUnfoldOutlined} > span {
    vertical-align: middle;
  }
`;

const StyledHeader = styled(Layout.Header)`
  text-align: right;
  padding: 0 16px;

  ${StyledMenu} {
    display: none;
  }

  @media (min-width: 768px) {
    ${StyledMenu} {
      display: inline-block;
    }

    ${StyledButton} {
      display: none;
    }
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
    <StyledHeader>
      <StyledMenu
        onClick={handleNavigation}
        mode="horizontal"
        className="app-header-menu"
      >
        <StyledMenuItem key="home">Home</StyledMenuItem>
        <StyledMenuItem key="create-account">Create Account</StyledMenuItem>
        <StyledMenuItem key="login">Log In</StyledMenuItem>
      </StyledMenu>
      <StyledButton
        type="link"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </StyledButton>
    </StyledHeader>
  );
};
