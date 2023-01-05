import styled from "styled-components";
import IImageProps from "./Image";

export const StyledImage = styled.img<IImageProps>`
  width: ${(props) => (props.size === "large" ? "280px" : "120px")};
  height: ${(props) => (props.size === "large" ? "340px" : "150px")};
`;
