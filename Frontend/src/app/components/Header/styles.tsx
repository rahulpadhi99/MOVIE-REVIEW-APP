import IHeaderProps from "./Header";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const HeaderContainerDiv = styled.div<IHeaderProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile1} {
    padding: 4px 6px;
    font-size: 15px;
  }
  @media ${device.mobile2} {
    padding: 8px 12px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    padding: 12px 18px;
    font-size: 25px;
  }
  @media ${device.laptop} {
    padding: 16px 24px;
    font-size: 30px;
  }
  @media ${device.desktop} {
    padding: 20px 30px;
    font-size: 35px;
  }
`;

export const AppNameDiv = styled.div``;

export const AvatarContainer = styled.div`
  display: flex;
  gap: 16px;
  @media ${device.mobile1} {
    font-size: 15px;
  }
  @media ${device.mobile2} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 35px;
  }
`;

export const UserDiv = styled.div``;
