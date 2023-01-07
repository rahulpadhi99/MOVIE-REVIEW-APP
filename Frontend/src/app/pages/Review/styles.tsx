import styled from "styled-components";

export const StyledSpan = styled.div`
  font-size: 40px;
  &.checked {
    color: orange;
  }
`;
export const ReviewContainerDiv = styled.div`
  padding: 24px 36px;
  text-align: center;
  min-height: 760px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export const MovieAndAddReviewDiv = styled.div`
  width: 100%;
`;

export const ReviewFormHeaderDiv = styled.div`
  font-size: 18px;
  padding: 8px;
`;

export const ReviewDetailHeaderDiv = styled.div`
  font-size: 18px;
  padding: 8px;
`;

export const MovieDetailDiv = styled.div`
  border: 1px solid;
  border-bottom: none;
  min-height: 440px;
`;

export const ReviewFormDiv = styled.div`
  min-height: 310px;
  text-align: center;
  border: 1px solid;
`;
export const ReviewTextFieldDiv = styled.div`
  padding: 16px;
  display: flex;
  gap: 24px;
  align-items: center;
`;
export const ReviewRatingDiv = styled.div`
  padding: 16px;
  border-top: 1px solid;
  display: flex;
  gap: 24px;
  align-items: center;
`;
export const ReviewSpanDiv = styled.div``;
export const ReviewDetailDiv = styled.div`
  width: 40%;
  border: 1px solid;
`;

export const ReviewDataDiv = styled.div`
  overflow: auto;
  border-bottom: 1px solid;
`;
export const ReviewForm = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`;
