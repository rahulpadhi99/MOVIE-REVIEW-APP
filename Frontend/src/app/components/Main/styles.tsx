import IMainProps from "./Main";
import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledMain = styled.main<IMainProps>`
  display: flex;
  flex-direction: column;

  @media ${device.mobile1} and (max-height: 750px) {
    min-height: 90vh;
  }
  @media ${device.mobile1} and (min-height: 750px) {
    min-height: 91.6vh;
  }
  @media ${device.mobile1} and (min-height: 900px) {
    min-height: 92vh;
  }
  @media ${device.mobile1} and (min-height: 1100px) {
    min-height: 93vh;
  }

  @media ${device.mobile2} and (max-height: 750px) {
    min-height: 88vh;
  }
  @media ${device.mobile2} and (min-height: 750px) {
    min-height: 89.9vh;
  }
  @media ${device.mobile2} and (min-height: 900px) {
    min-height: 91vh;
  }
  @media ${device.mobile2} and (min-height: 1100px) {
    min-height: 92vh;
  }

  @media ${device.tablet} and (max-height: 650px) {
    min-height: 88vh;
  }
  @media ${device.tablet} and (min-height: 750px) {
    min-height: 88.3vh;
  }
  @media ${device.tablet} and (min-height: 900px) {
    min-height: 90vh;
  }
  @media ${device.tablet} and (min-height: 1100px) {
    min-height: 91vh;
  }

  @media ${device.laptop} and (max-height: 750px) {
    min-height: 83vh;
  }
  @media ${device.laptop} and (min-height: 750px) {
    min-height: 86.7vh;
  }
  @media ${device.laptop} and (min-height: 900px) {
    min-height: 87vh;
  }
  @media ${device.laptop} and (min-height: 1100px) {
    min-height: 89vh;
  }

  @media ${device.desktop} and (max-height: 750px) {
    min-height: 82vh;
  }
  @media ${device.desktop} and (min-height: 750px) {
    min-height: 84.9vh;
  }
  @media ${device.desktop} and (min-height: 900px) {
    min-height: 86vh;
  }
  @media ${device.desktop} and (min-height: 1100px) {
    min-height: 87vh;
  }
`;
