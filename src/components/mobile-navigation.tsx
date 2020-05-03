import React from "react";
import { Menu, Drawer } from "antd";
import { ClickParam } from "antd/lib/menu";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledMenu = styled(Menu)`
  border-right: none;
`;

interface IProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen(value: boolean): void;
}

export const MobileNavigation = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}: IProps) => {
  const history = useHistory();

  const handleNavigation = ({ key }: ClickParam) => {
    setIsMobileNavOpen(false);

    if (key === "home") return history.push("/");

    return history.push(`/${key}`);
  };
  return (
    <Drawer
      placement="right"
      onClose={() => setIsMobileNavOpen(false)}
      visible={isMobileNavOpen}
    >
      <StyledMenu
        onClick={handleNavigation}
        mode="vertical"
        className="app-header-menu"
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="create-account">Create Account</Menu.Item>
        <Menu.Item key="login">Log In</Menu.Item>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
      </StyledMenu>
    </Drawer>
  );
};
