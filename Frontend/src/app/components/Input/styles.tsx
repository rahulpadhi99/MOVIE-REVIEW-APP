import styled from "styled-components";
import { device } from "../../constants/constants";
import IInputProps from "./Input";

export const StyledLabel = styled.label`
  @media ${device.mobile1} {
    font-size: 12px;
  }
  @media ${device.tablet1} {
    font-size: 14px;
  }
  @media ${device.desktop1} {
    font-size: 18px;
  }
`;

export const StyledInput = styled.input<IInputProps>`
  @media ${device.mobile1} {
    font-size: 12px;
    width: 200px;
    height: 25px;
  }
  @media ${device.tablet1} {
    font-size: 14px;
    width: 350px;
    height: 35px;
  }
  @media ${device.desktop1} {
    font-size: 18px;
    width: 400px;
    height: 40px;
  }
`;
