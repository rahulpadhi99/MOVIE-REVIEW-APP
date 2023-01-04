import IUserCardProps from "./UserCard";
import {
  UserCardDiv,
  UserNameDiv,
  UserEmailDiv,
  UserReviewDetailDiv,
  TotalReviewDiv,
  LastWeekReviewDiv,
  LastMonthReviewDiv,
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
