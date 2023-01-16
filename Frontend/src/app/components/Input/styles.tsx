import styled from "styled-components";
import { device } from "../../constants/constants";
import IInputProps from "./Input";

export const StyledLabel = styled.label`
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

export const StyledInput = styled.input<IInputProps>`
  @media ${device.mobile1} {
    font-size: 10px;
    width: 150px;
    height: 15px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
    width: 150px;
    height: 20px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    width: 250px;
    height: 25px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    width: 300px;
    height: 30px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    width: 400px;
    height: 40px;
  }
`;
