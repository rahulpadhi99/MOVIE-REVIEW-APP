import styled from "styled-components";
import { device } from "../../constants/constants";
import IImageProps from "./Image";

export const StyledImage = styled.img<IImageProps>`
  width: ${(props) => (props.size === "large" ? "380px" : "100px")};
  height: ${(props) => (props.size === "large" ? "440px" : "130px")};
`;
