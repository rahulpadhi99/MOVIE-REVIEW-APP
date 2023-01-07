import styled from "styled-components";
import { device } from "../../constants/constants";
import ISelectProps from "./Select";

export const StyledLabel = styled.label`
  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

export const StyledOption = styled.option`
  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 18px;
  }
`;

export const StyledSelect = styled.select<ISelectProps>`
  @media ${device.mobile} {
    font-size: 12px;
    width: 50px;
    height: 25px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    width: 75px;
    height: 35px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    width: 100px;
    height: 40px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    width: 100px;
    height: 40px;
  }
`;
