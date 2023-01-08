import IHeaderProps from "./Header";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const HeaderContainerDiv = styled.div<IHeaderProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile1} {
    padding: 4px 8px;
  }
  @media ${device.tablet1} {
    padding: 8px 16px;
  }
  @media ${device.tablet4} {
    padding: 8px 16px;
  }
  @media ${device.tablet5} {
    padding: 8px 16px;
  }
  @media ${device.desktop1} {
    padding: 16px 32px;
  }
`;

export const AppNameDiv = styled.div`
  @media ${device.mobile1} {
    font-size: 18px;
  }
  @media ${device.tablet1} {
    font-size: 24px;
  }
  @media ${device.desktop1} {
    font-size: 36px;
  }
`;
