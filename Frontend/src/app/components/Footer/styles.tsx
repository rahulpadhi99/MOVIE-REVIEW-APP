import IFooterProps from "./Footer";
import styled from "styled-components";

export const FooterContainerDiv = styled.div<IFooterProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;
