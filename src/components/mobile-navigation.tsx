import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ClickParam } from "antd/lib/menu";

const StyledMenu = styled(Menu)`
  @media (min-width: 768px) {
    display: none;
  }
`;

interface IProps {
  isMobileNavOpen: boolean;
}

export const MobileNavigation = ({ isMobileNavOpen }: IProps) => {
  const history = useHistory();

  const handleNavigation = (values: ClickParam) => {
    if (values.key === "home") return history.push("/");

    return history.push(`/${values.key}`);
  };

  return (
    <StyledMenu
      onClick={handleNavigation}
      mode="vertical"
      className="app-header-menu"
    >
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="create-account">Create Account</Menu.Item>
      <Menu.Item key="login">Log In</Menu.Item>
    </StyledMenu>
  );
};
