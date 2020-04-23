import React, { ReactNode } from "react";
import { Layout } from "antd";
import styled from "styled-components";

// 134px is the height of Header + Footer
const StyledContent = styled(Layout.Content)`
  height: calc(100vh - 134px);
`;

interface IProps {
  rest?: any;
  children: ReactNode;
}

export const Content = ({ children, ...rest }: IProps) => (
  <StyledContent {...rest}>{children}</StyledContent>
);
