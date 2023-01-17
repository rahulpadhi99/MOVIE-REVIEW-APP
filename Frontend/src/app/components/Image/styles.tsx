import styled from "styled-components";
import { device } from "../../constants/constants";
import IImageProps from "./Image";

export const StyledImage = styled.img<IImageProps>`
  @media ${device.mobile1} {
    width: ${(props) => (props.size === "large" ? "150px" : "100px")};
    height: ${(props) => (props.size === "large" ? "280px" : "130px")};
  }
  @media ${device.mobile2} {
    width: ${(props) => (props.size === "large" ? "200px" : "100px")};
    height: ${(props) => (props.size === "large" ? "320px" : "130px")};
  }
  @media ${device.tablet} {
    width: ${(props) => (props.size === "large" ? "280px" : "100px")};
    height: ${(props) => (props.size === "large" ? "360px" : "130px")};
  }
  @media ${device.laptop} {
    width: ${(props) => (props.size === "large" ? "300px" : "100px")};
    height: ${(props) => (props.size === "large" ? "430px" : "130px")};
  }
  @media ${device.desktop} {
    width: ${(props) => (props.size === "large" ? "380px" : "100px")};
    height: ${(props) => (props.size === "large" ? "450px" : "130px")};
  }
`;
