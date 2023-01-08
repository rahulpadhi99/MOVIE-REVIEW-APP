import styled from "styled-components";
import { device } from "../../constants/constants";

export const WelcomeContainerDiv = styled.div`
  // min-height: 808px;
  text-align: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  @media ${device.mobile1} {
    font-size: 24px;
  }
  @media ${device.tablet1} {
    font-size: 36px;
  }
  @media ${device.desktop1} {
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

  @media ${device.mobile1} {
    font-size: 12px;
  }
  @media ${device.tablet1} {
    font-size: 16px;
  }
  @media ${device.desktop1} {
    font-size: 24px;
  }
`;

export const LoginMessageDiv = styled.div`
  @media ${device.mobile1} {
    font-size: 12px;
  }
  @media ${device.tablet1} {
    font-size: 16px;
  }
  @media ${device.desktop1} {
    font-size: 24px;
  }
`;
