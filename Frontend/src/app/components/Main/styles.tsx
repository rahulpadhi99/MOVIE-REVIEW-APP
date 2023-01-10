import styled from "styled-components";
import IMainProps from "./Main";
import { device } from "../../constants/constants";

export const StyledMain = styled.main<IMainProps>`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  @media ${device.mobile1} and (max-height: 750px) {
    min-height: 90vh;
  }
  @media ${device.mobile1} and (min-height: 750px) {
    min-height: 91vh;
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
    min-height: 90vh;
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
    min-height: 89vh;
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
    min-height: 85vh;
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
    min-height: 84vh;
  }
  @media ${device.desktop} and (min-height: 900px) {
    min-height: 86vh;
  }
  @media ${device.desktop} and (min-height: 1100px) {
    min-height: 87vh;
  }
`;
