import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledSpan = styled.div`
  font-size: 20px;
  &.checked {
    color: orange;
  }
`;
export const ReviewContainerDiv = styled.div`
  text-align: center;
  padding: 20px 24px;

  @media ${device.laptop} {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    padding: 16px 24px;
  }
  @media ${device.desktop} {
    display: flex;
    gap: 16px;
    justify-content: space-between;
    padding: 17px 36px;
  }
`;

export const MovieAndAddReviewDiv = styled.div`
  width: 100%;
`;

export const ReviewFormHeaderDiv = styled.div``;

export const ReviewDetailHeaderDiv = styled.div``;

export const MovieDetailDiv = styled.div`
  border: 1px solid;
`;

export const ReviewFormDiv = styled.div`
  text-align: center;
  font-size: 14px;
  @media ${device.mobile1} {
    padding-bottom: 8px;
  }
  @media ${device.mobile2} {
    padding-bottom: 8px;
  }
  @media ${device.laptop} {
    padding-bottom: 2px;
  }
`;
export const ReviewTextFieldDiv = styled.div`
  padding: 16px 16px 8px 16px;
  text-align: left;
`;
export const ReviewRatingDiv = styled.div`
  padding: 16px 16px 8px 16px;
  border-top: 1px solid;
  display: flex;
  gap: 24px;
`;
export const ReviewSpanDiv = styled.div``;
export const ReviewDetailDiv = styled.div`
  width: 100%;
  border: 1px solid;

  @media ${device.laptop} {
    width: 40%;
  }
`;

export const ReviewDataDiv = styled.div`
  overflow: auto;
  height: 45vh;
  border-bottom: 1px solid;
`;
export const ReviewForm = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const ReviewSummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  border: 1px solid;
`;
export const ReviewSummaryHeaderDiv = styled.div`
  border-bottom: 1px solid;
`;

export const ReviewSummaryDetailDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media ${device.mobile1} {
    min-height: 12vh;
  }
  @media ${device.mobile2} {
    min-height: 12vh;
  }
  @media ${device.laptop} {
    min-height: 27vh;
  }
  @media ${device.desktop} {
    min-height: 25vh;
  }
`;

export const TotalReviewDiv = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  border-right: 1px solid;
`;

export const PositiveReviewDiv = styled(TotalReviewDiv)``;

export const AverageReviewDiv = styled(TotalReviewDiv)``;
export const NegativeReviewDiv = styled(TotalReviewDiv)`
  border-right: none;
`;
