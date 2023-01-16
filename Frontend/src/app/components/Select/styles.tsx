import styled from "styled-components";
import { device } from "../../constants/constants";
import ISelectProps from "./Select";

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

export const StyledOption = styled.option`
  font-size: 18px;
`;

export const StyledSelect = styled.select<ISelectProps>`
  @media ${device.mobile1} {
    font-size: 10px;
    width: 50px;
    height: 15px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
    width: 60px;
    height: 20px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    width: 70px;
    height: 25px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    width: 90px;
    height: 30px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    width: 100px;
    height: 40px;
  }
`;
