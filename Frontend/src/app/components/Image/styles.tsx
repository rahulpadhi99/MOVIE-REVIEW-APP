import styled from "styled-components";
import { device } from "../../constants/constants";
import IImageProps from "./Image";

export const StyledImage = styled.img<IImageProps>`
  @media ${device.mobile} {
    width: ${(props) => (props.size === "large" ? "380px" : "60px")};
    height: ${(props) => (props.size === "large" ? "440px" : "90px")};
  }
  @media ${device.tablet} {
    width: ${(props) => (props.size === "large" ? "380px" : "60px")};
    height: ${(props) => (props.size === "large" ? "440px" : "90px")};
  }
  @media ${device.laptop} {
    width: ${(props) => (props.size === "large" ? "380px" : "80px")};
    height: ${(props) => (props.size === "large" ? "440px" : "110px")};
  }
  @media ${device.desktop} {
    width: ${(props) => (props.size === "large" ? "380px" : "100px")};
    height: ${(props) => (props.size === "large" ? "440px" : "130px")};
  }
`;
