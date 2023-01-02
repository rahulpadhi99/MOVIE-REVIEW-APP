import IHeaderProps from "./Header";
import styled from "styled-components";

export const HeaderContainerDiv = styled.div<IHeaderProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 36px;
  font-size: 36px;
`;
