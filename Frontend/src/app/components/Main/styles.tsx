import styled from "styled-components";
import IMainProps from "./Main";
import { device } from "../../constants/constants";

export const StyledMain = styled.main<IMainProps>`
  min-height: 81.3vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
`;
