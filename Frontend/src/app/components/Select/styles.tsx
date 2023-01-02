import styled from "styled-components";
import ISelectProps from "./Select";

export const StyledLabel = styled.label`
  font-size: large;
`;

export const StyledOption = styled.option`
  font-size: 18px;
`;

export const StyledSelect = styled.select<ISelectProps>`
  width: 100px;
  height: 40px;
  font-size: 18px;
`;
