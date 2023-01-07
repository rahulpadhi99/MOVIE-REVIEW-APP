import styled from "styled-components";
import { device } from "../../constants/constants";

export const WelcomeContainerDiv = styled.div`
  min-height: 808px;
  text-align: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  @media ${device.mobile} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 32px;
  }
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 48px;
  }
`;
export const AppNameDiv = styled.div`
  color: orange;
`;

export const WelcomeMessageDiv = styled.div``;

export const SignupMessageDiv = styled.div`
  .signup-link,
  .login-link {
    color: orange;
  }

  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const LoginMessageDiv = styled.div`
  @media ${device.mobile} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;
