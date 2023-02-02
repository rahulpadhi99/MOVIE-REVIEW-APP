import styled from "styled-components";
import { device } from "../../constants/constants";

export const SearchContainerDiv = styled.div`
  display: flex;
  place-content: center;
  background-color: aqua;

  @media ${device.mobile1} {
    gap: 4px;
    font-size: 15px;
    padding: 8px 12px;
  }
  @media ${device.mobile2} {
    gap: 16px;
    font-size: 20px;
    padding: 8px 12px;
  }
  @media ${device.tablet} {
    gap: 24px;
    font-size: 25px;
    padding: 12px 18px;
  }
  @media ${device.laptop} {
    gap: 30px;
    font-size: 30px;
    padding: 16px 24px;
  }
  @media ${device.desktop} {
    gap: 36px;
    font-size: 35px;
    padding: 20px 30px;
  }
`;

export const SearchAndAddButtonDiv = styled.div`
  @media ${device.mobile1} {
    gap: 10px;
    display: flex;
    align-items: end;
  }
  @media ${device.mobile2} {
    gap: 12px;
    display: flex;
    align-items: end;
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

export const MovieContainerDiv = styled.div`
  gap: 16px;
  display: grid;

  @media ${device.mobile1} {
    padding: 4px 6px;
    grid-template-columns: auto;
  }
  @media ${device.mobile2} {
    padding: 8px 12px;
    grid-template-columns: auto;
  }
  @media ${device.tablet} {
    padding: 12px 18px;
    grid-template-columns: auto auto;
  }
  @media ${device.laptop} {
    padding: 16px 24px;
    grid-template-columns: auto auto;
  }
  @media ${device.desktop} {
    padding: 20px 30px;
    grid-template-columns: auto auto auto;
  }
`;

export const SearchMovieDiv = styled.div``;

export const SearchYearDiv = styled.div``;

export const MovieCardContainerDiv = styled.div``;
