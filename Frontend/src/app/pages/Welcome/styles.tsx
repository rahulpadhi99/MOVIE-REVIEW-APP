import styled from "styled-components";
import { device } from "../../constants/constants";

export const WelcomeContainerDiv = styled.div`
  display: flex;
  text-align: center;
  min-height: inherit;
  place-content: center;
  flex-direction: column;

  @media ${device.mobile1} {
    font-size: 20px;
  }
  @media ${device.mobile2} {
    font-size: 25px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
`;

export const AppNameDiv = styled.div`
  color: orange;
`;

export const SignupMessageDiv = styled.div`
  .signup-link,
  .login-link {
    color: orange;
  }

  @media ${device.mobile1} {
    font-size: 12px;
  }
  @media ${device.mobile2} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 21px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const LoginMessageDiv = styled.div`
  @media ${device.mobile1} {
    font-size: 12px;
  }
  @media ${device.mobile2} {
    font-size: 15px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 21px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`;

export const WelcomeMessageDiv = styled.div``;
