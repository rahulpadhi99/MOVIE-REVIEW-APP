import styled from "styled-components";
import IMainProps from "./Main";
import { device } from "../../constants/constants";

export const StyledMain = styled.main<IMainProps>`
  diplay: flex;
  place-content: center;
  align-items: center;
  @media ${device.mobile1} {
    min-height: 558px;
  }
  @media ${device.mobile2} {
    min-height: 698px;
  }
  @media ${device.mobile3} {
    min-height: 718px;
  }
  @media ${device.mobile4} {
    min-height: 762px;
  }
  @media ${device.mobile5} {
    min-height: 814px;
  }
  @media ${device.tablet1} {
    min-height: 864px;
  }
  @media ${device.tablet2} {
    min-height: 926px;
  }
  @media ${device.tablet3} {
    min-height: 1182px;
  }
  @media ${device.tablet4} {
    min-height: 503px;
  }
  @media ${device.tablet5} {
    min-height: 702px;
  }
  @media ${device.desktop1} {
    min-height: 587px;
  }
  @media ${device.desktop2} {
    min-height: 635px;
  }
  @media ${device.desktop3} {
    min-height: 767px;
  }
  @media ${device.desktop4} {
    min-height: 731px;
  }
  @media ${device.desktop5} {
    min-height: 767px;
  }
  @media ${device.desktop6} {
    min-height: 947px;
  }
`;
