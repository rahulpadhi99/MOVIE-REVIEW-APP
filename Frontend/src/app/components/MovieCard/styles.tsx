import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const MovieCardDiv = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid;

  @media ${device.mobile1} {
    padding: 2px;
    gap: 8px;
  }
  @media ${device.tablet1} {
    padding: 4px;
    gap: 10px;
  }
  @media ${device.desktop1} {
    padding: 8px;
    gap: 16px;
  }
`;

export const ImagContainerDiv = styled.div``;
export const DetailsContainerDiv = styled.div`
  @media ${device.mobile1} {
    font-size: 10px;
  }
  @media ${device.tablet1} {
    font-size: 12px;
  }
  @media ${device.desktop1} {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const MovieNameDiv = styled.div`
  font-weight: bold;

  @media ${device.mobile1} {
    font-size: 16px;
    padding-bottom: 8px;
  }
  @media ${device.tablet1} {
    font-size: 20px;
    padding-bottom: 10px;
  }
  @media ${device.desktop1} {
    font-size: 28px;
    padding-bottom: 14px;
  }
`;

export const MovieTimeDiv = styled.div``;

export const MovieGenreDiv = styled.div``;
export const MovieReleaseDiv = styled.div``;
