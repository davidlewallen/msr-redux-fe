import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  @media (min-width: 768px) {
    display: none;
  }
`;

interface IProps {
  isMobileNavOpen: boolean;
}

export const MobileNavigation = ({ isMobileNavOpen }: IProps) => {
  console.log(isMobileNavOpen);
  return (
    <StyledMenu
      // onClick={handleNavigation}
      mode="vertical"
      className="app-header-menu"
    >
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="create-account">Create Account</Menu.Item>
      <Menu.Item key="login">Log In</Menu.Item>
    </StyledMenu>
  );
};
