import IButtonProps from "./Button";
import styled from "styled-components";

export const StyledButton = styled.button<IButtonProps>`
  width: 100px;
  height: 40px;
  color: ${(props) => (props.kind = "primary" ? "black" : "orange")};
  background-color: ${(props) => (props.kind = "primary" ? "orange" : "transparent")};
  font-size: large;
`;
