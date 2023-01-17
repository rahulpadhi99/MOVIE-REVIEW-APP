import styled from "styled-components";
import ITextAreaProps from "./TextArea";

export const StyledLabel = styled.label`
  text-align: left;
`;

export const StyledTextArea = styled.textarea<ITextAreaProps>`
  width: 95%;
  margin-top: 8px;
  min-height: 100px;
  display: flex;
  border: 1px solid orange;
  padding: 8px;
  place-content: center;
`;
