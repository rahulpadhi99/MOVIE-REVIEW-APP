import IButtonProps from "./Button";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const StyledButton = styled.button<IButtonProps>`
  white-space: nowrap;
  color: ${(props) => (props.kind === "primary" ? "black" : "orange")};
  background-color: ${(props) =>
    props.kind === "primary" ? "orange" : "white"};

  @media ${device.mobile1} {
    font-size: 10px;
    height: 15px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
    height: 20px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding: 3px 9px;
    height: 25px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    padding: 5px 9px;
    height: 30px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    padding: 7px 12px;
    height: 35px;
  }
`;
