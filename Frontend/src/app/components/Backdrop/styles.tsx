import styled from "styled-components";
import { device } from "../../constants/constants";

export const BackDropDiv = styled.div`
  & .backdrop {
    background-color: #e2df7080;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
  place-content: center;
`;

export const BackDropContentDiv = styled.div`
  background-color: orange;
  border: 1px solid;
  padding: 24px;
`;

export const TitleContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const MovieNameInputDiv = styled.div`
  padding: 16px 0px;
`;
export const MovieYearSelectDiv = styled(MovieNameInputDiv)``;

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

export const CloseButtonDiv = styled.div``;
