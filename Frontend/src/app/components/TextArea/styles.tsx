import styled from "styled-components";
import ITextAreaProps from "./TextArea";

export const StyledLabel = styled.label`
  font-size: large;
  text-align: left;
`;

export const StyledTextArea = styled.textarea<ITextAreaProps>`
  width: 100%;
  height: 100px;
  max-width: 350px;
  max-height: 100px;
  font-size: 18px;
`;
