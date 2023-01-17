import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const MovieDetailContainerDiv = styled.div`
  display: flex;

  @media ${device.mobile1} {
    gap: 8px;
  }
  @media ${device.mobile2} {
    gap: 12px;
  }
  @media ${device.tablet} {
    gap: 16px;
  }
  @media ${device.laptop} {
    gap: 20px;
  }
  @media ${device.desktop} {
    gap: 24px;
  }
`;

export const ImageContainerDiv = styled.div``;

export const DetailsContainerDiv = styled.div`
  text-align: left;
  @media ${device.mobile1} {
    font-size: 10px;
    line-height: 20px;
  }
  @media ${device.mobile2} {
    font-size: 12px;
    line-height: 25px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 30px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    line-height: 35px;
  }
  @media ${device.desktop} {
    font-size: 18px;
    line-height: 40px;
  }
`;
export const MovieNameDiv = styled.div`
  font-weight: bold;

  @media ${device.mobile1} {
    font-size: 16px;
  }
  @media ${device.mobile2} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 28px;
  }
  @media ${device.laptop} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
`;
export const MovieActorsDiv = styled.div``;
export const MovieDirectorDiv = styled.div``;
export const MoviePlotDiv = styled.div``;
export const MovieIMDBRatingDiv = styled.div``;
export const MovieBoxOfficeDiv = styled.div``;
export const MovieReleaseDiv = styled.div`
  padding-top: 8px;
`;

export const MovieRunDiv = styled.div``;
export const MovieGenreDiv = styled.div``;
