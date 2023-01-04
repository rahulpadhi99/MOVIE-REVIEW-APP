import styled from "styled-components";

export const UserCardDiv = styled.div``;
export const UserNameDiv = styled.div`
  border-bottom: 1px solid;
`;

export const UserEmailDiv = styled.div`
  border-bottom: 1px solid;
`;

export const UserReviewDetailDiv = styled.div`
  display: flex;
  min-height: 207px;
`;

export const LastMonthReviewDiv = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  width: 100%;
`;

export const TotalReviewDiv = styled(LastMonthReviewDiv)`
  border-right: 1px solid;
`;

export const LastWeekReviewDiv = styled(TotalReviewDiv)``;
