import styled from "styled-components";
import IAvatarProps from "./Avatar";

export const StyledAvatar = styled.div<IAvatarProps>`
  display: flex;
  align-items: end;
  & .avatar {
    background-color: ${(props) => props.background};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
`;
