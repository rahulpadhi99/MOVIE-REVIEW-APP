import styled from "styled-components";
import { device } from "../../constants/constants";

export const SearchContainerDiv = styled.div`
  display: flex;
  place-content: center;
  background-color: aqua;
  @media ${device.mobile1} {
    padding: 8px;
    gap: 10px;
  }
  @media ${device.tablet1} {
    padding: 12px 16px;
    gap: 20px;
  }
  @media ${device.desktop1} {
    padding: 20px 32px;
    gap: 36px;
  }
`;
export const SearchMovieDiv = styled.div``;

export const SearchYearDiv = styled.div``;

export const SearchButtonDiv = styled.div`
  @media ${device.mobile1} {
    display: flex;
    align-items: end;
  }
`;

export const MovieContainerDiv = styled.div`
  display: grid;

  @media ${device.mobile1} {
    padding: 8px;
    grid-template-columns: auto auto;
    gap: 12px;
  }
  @media ${device.tablet1} {
    padding: 12px 16px;
    grid-template-columns: auto auto;
    gap: 12px;
  }
  @media ${device.desktop1} {
    padding: 20px 32px;
    grid-template-columns: auto auto auto auto;
    gap: 16px;
  }
`;

export const MovieCardContainerDiv = styled.div``;
