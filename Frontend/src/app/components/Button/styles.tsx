import IButtonProps from "./Button";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const StyledButton = styled.button<IButtonProps>`
  color: ${(props) => (props.kind === "primary" ? "black" : "orange")};
  background-color: ${(props) =>
    props.kind === "primary" ? "orange" : "white"};

  @media ${device.mobile} {
    font-size: 12px;
    width: 60px;
    height: 25px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    width: 80px;
    height: 35px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    width: 100px;
    height: 40px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    width: 100px;
    height: 40px;
  }
`;
