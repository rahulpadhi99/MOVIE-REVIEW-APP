import IHeaderProps from "./Header";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const HeaderContainerDiv = styled.div<IHeaderProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobile} {
    padding: 4px 8px;
  }
  @media ${device.tablet} {
    padding: 8px 16px;
  }
  @media ${device.laptop} {
    padding: 12px 24px;
  }
  @media ${device.desktop} {
    padding: 16px 32px;
  }
`;

export const AppNameDiv = styled.div`
  @media ${device.mobile} {
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 36px;
  }
`;
