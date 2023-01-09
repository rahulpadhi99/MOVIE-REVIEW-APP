import IButtonProps from "./Button";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const StyledButton = styled.button<IButtonProps>`
  color: ${(props) => (props.kind === "primary" ? "black" : "orange")};
  background-color: ${(props) =>
    props.kind === "primary" ? "orange" : "white"};

  @media ${device.mobile1} {
    font-size: 10px;
    width: 60px;
    height: 20px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
    width: 70px;
    height: 24px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    width: 80px;
    height: 27px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    width: 90px;
    height: 30px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    width: 100px;
    height: 33px;
  }
`;
