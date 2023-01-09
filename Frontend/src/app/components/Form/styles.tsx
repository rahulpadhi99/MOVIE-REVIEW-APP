import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledForm = styled.form`
  display: flex;
  gap: 8px;
  flex-direction: column;
  place-content: center;
`;

export const ButtonContainerDiv = styled.div`
  text-align: right;

  @media ${device.mobile1} {
    padding-top: 4px;
  }
  @media ${device.mobile2} {
    padding-top: 8px;
  }
  @media ${device.tablet} {
    padding-top: 12px;
  }
  @media ${device.laptop} {
    padding-top: 14px;
  }
  @media ${device.desktop} {
    padding-top: 16px;
  }
`;
