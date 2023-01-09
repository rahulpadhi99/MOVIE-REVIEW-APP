import styled from "styled-components";
import { device } from "../../constants/constants";
import ISelectProps from "./Select";

export const StyledLabel = styled.label`
  font-size: 18px;
`;

export const StyledOption = styled.option`
  font-size: 18px;
`;

export const StyledSelect = styled.select<ISelectProps>`
  font-size: 18px;
  width: 100px;
  height: 40px;
`;
