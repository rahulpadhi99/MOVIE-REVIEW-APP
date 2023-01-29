import IHeaderProps from "./Header";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const HeaderContainerDiv = styled.div<IHeaderProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile1} {
    padding: 6px 24px;
    font-size: 15px;
  }
  @media ${device.mobile2} {
    padding: 10px 24px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    padding: 14px 24px;
    font-size: 25px;
  }
  @media ${device.laptop} {
    padding: 16px 24px;
    font-size: 30px;
  }
  @media ${device.desktop} {
    padding: 20px 36px;
    font-size: 35px;
  }
`;

export const AppNameDiv = styled.div``;

export const AvatarContainer = styled.div`
  display: flex;
  @media ${device.mobile1} {
    gap: 8px;
  }
  @media ${device.mobile2} {
    gap: 10px;
  }
  @media ${device.tablet} {
    gap: 12px;
  }
  @media ${device.laptop} {
    gap: 14px;
  }
  @media ${device.desktop} {
    gap: 16px;
  }
`;

export const UserNameDiv = styled.div`
  display: grid;
  place-content: center;
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
