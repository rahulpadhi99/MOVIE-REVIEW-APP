import styled from "styled-components";
import { device } from "../../constants/constants";

export const SearchContainerDiv = styled.div`
  display: flex;
  place-content: center;
  background-color: aqua;
  @media ${device.mobile1} {
    padding: 8px 12px;
    font-size: 15px;
    gap: 4px;
  }
  @media ${device.mobile2} {
    padding: 8px 12px;
    font-size: 20px;
    gap: 16px;
  }
  @media ${device.tablet} {
    padding: 12px 18px;
    font-size: 25px;
    gap: 24px;
  }
  @media ${device.laptop} {
    padding: 16px 24px;
    font-size: 30px;
    gap: 30px;
  }
  @media ${device.desktop} {
    padding: 20px 30px;
    font-size: 35px;
    gap: 36px;
  }
`;
export const SearchMovieDiv = styled.div``;

export const SearchYearDiv = styled.div``;

export const SearchAndAddButtonDiv = styled.div`
  @media ${device.mobile1} {
    display: flex;
    gap: 10px;
    align-items: end;
  }
  @media ${device.mobile2} {
    display: flex;
    gap: 12px;
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
  display: grid;
  gap: 16px;

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

export const MovieCardContainerDiv = styled.div``;
