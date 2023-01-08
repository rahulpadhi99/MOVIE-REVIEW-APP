import styled from "styled-components";
import { device } from "../../constants/constants";
import IImageProps from "./Image";

export const StyledImage = styled.img<IImageProps>`
  @media ${device.mobile1} {
    width: ${(props) => (props.size === "large" ? "380px" : "60px")};
    height: ${(props) => (props.size === "large" ? "440px" : "90px")};
  }
  @media ${device.tablet1} {
    width: ${(props) => (props.size === "large" ? "380px" : "60px")};
    height: ${(props) => (props.size === "large" ? "440px" : "90px")};
  }
  @media ${device.desktop1} {
    width: ${(props) => (props.size === "large" ? "380px" : "100px")};
    height: ${(props) => (props.size === "large" ? "440px" : "130px")};
  }
`;
