import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const MovieCardDiv = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid;
  padding: 8px;
  gap: 16px;
`;

export const ImagContainerDiv = styled.div``;
export const DetailsContainerDiv = styled.div`
  line-height: 24px;

  @media ${device.mobile1} {
    font-size: 10px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
`;
export const MovieNameDiv = styled.div`
  font-weight: bold;

  @media ${device.mobile1} {
    font-size: 16px;
    padding-bottom: 10px;
  }
  @media ${device.mobile2} {
    font-size: 20px;
    padding-bottom: 10px;
  }
  @media ${device.tablet} {
    font-size: 20px;
    padding-bottom: 11px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    padding-bottom: 12px;
  }
  @media ${device.desktop} {
    font-size: 28px;
    padding-bottom: 14px;
  }
`;

export const MovieTimeDiv = styled.div``;

export const MovieGenreDiv = styled.div``;
export const MovieReleaseDiv = styled.div``;
