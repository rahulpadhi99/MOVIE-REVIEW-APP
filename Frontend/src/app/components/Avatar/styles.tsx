import styled from "styled-components";
import { device } from "../../constants/constants";
import IAvatarProps from "./Avatar";

export const StyledAvatar = styled.div<IAvatarProps>`
  display: flex;
  align-items: end;
  & .avatar {
    background-color: ${(props) => props.background};

    @media ${device.mobile1} {
      width: ${(props) =>
        props.name === "user"
          ? "28px"
          : props.name === "review"
          ? "20px"
          : "50px"};
      height: ${(props) =>
        props.name === "user"
          ? "28px"
          : props.name === "review"
          ? "20px"
          : "50px"};
    }
    @media ${device.mobile2} {
      width: ${(props) =>
        props.name === "user"
          ? "38px"
          : props.name === "review"
          ? "28px"
          : "80px"};
      height: ${(props) =>
        props.name === "user"
          ? "38px"
          : props.name === "review"
          ? "28px"
          : "80px"};
    }
    @media ${device.tablet} {
      width: ${(props) =>
        props.name === "user"
          ? "42px"
          : props.name === "review"
          ? "32px"
          : "100px"};
      height: ${(props) =>
        props.name === "user"
          ? "42px"
          : props.name === "review"
          ? "32px"
          : "100px"};
    }
    @media ${device.laptop} {
      width: ${(props) =>
        props.name === "user"
          ? "45px"
          : props.name === "review"
          ? "34px"
          : "130px"};
      height: ${(props) =>
        props.name === "user"
          ? "45px"
          : props.name === "review"
          ? "34px"
          : "130px"};
    }
    @media ${device.desktop} {
      width: ${(props) =>
        props.name === "user"
          ? "47px"
          : props.name === "review"
          ? "36px"
          : "150px"};
      height: ${(props) =>
        props.name === "user"
          ? "47px"
          : props.name === "review"
          ? "36px"
          : "150px"};
    }
  }
`;
