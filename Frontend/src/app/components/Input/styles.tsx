import styled from "styled-components";
import IInputProps from "./Input";

export const StyledLabel = styled.label`
  font-size: large;
`;

export const StyledInput = styled.input<IInputProps>`
  width: 400px;
  height: 40px;
  font-size: 18px;
`;
