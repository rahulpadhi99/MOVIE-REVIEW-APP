import IUserCardProps from "./UserCard";
import {
  UserCardDiv,
  UserNameDiv,
  UserEmailDiv,
  TotalReviewDiv,
  LastWeekReviewDiv,
  LastMonthReviewDiv,
  UserReviewDetailDiv,
} from "./styles";

const UserCard = (props: IUserCardProps) => {
  return (
    <UserCardDiv>
      <UserNameDiv>USER</UserNameDiv>
      <UserEmailDiv>user@gmail.com</UserEmailDiv>
      <UserReviewDetailDiv>
        <TotalReviewDiv>20</TotalReviewDiv>
        <LastWeekReviewDiv>15</LastWeekReviewDiv>
        <LastMonthReviewDiv>5</LastMonthReviewDiv>
      </UserReviewDetailDiv>
    </UserCardDiv>
  );
};
export default UserCard;
