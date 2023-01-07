import styled from "styled-components";
import ITextAreaProps from "./TextArea";

export const StyledLabel = styled.label`
  text-align: left;
`;

export const StyledTextArea = styled.textarea<ITextAreaProps>`
  font-size: 18px;
  width: 90%;
  min-height: 100px;
  display: flex;
  border: 1px solid orange;
  padding: 8px;
  place-content: center;
`;
