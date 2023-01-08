import IFooterProps from "./Footer";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const FooterContainerDiv = styled.div<IFooterProps>`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

  @media ${device.mobile1} {
    padding: 4px 8px;
  }
  @media ${device.tablet1} {
    padding: 8px 16px;
  }
  @media ${device.tablet4} {
    padding: 8px 16px;
  }
  @media ${device.tablet5} {
    padding: 8px 16px;
  }
  @media ${device.desktop1} {
    padding: 16px 32px;
  }
`;
