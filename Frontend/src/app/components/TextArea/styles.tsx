import styled from "styled-components";
import { device } from "../../constants/constants";
import ITextAreaProps from "./TextArea";

export const StyledLabel = styled.label`
  text-align: left;
`;

export const StyledTextArea = styled.textarea<ITextAreaProps>`
  width: 96%;
  margin-top: 8px;
  min-height: 50px;
  display: flex;
  border: 1px solid orange;
  padding: 8px;
  place-content: center;
`;

export const ErrorDiv = styled.div`
  color: red;

  @media ${device.mobile1} {
    font-size: 10px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;
