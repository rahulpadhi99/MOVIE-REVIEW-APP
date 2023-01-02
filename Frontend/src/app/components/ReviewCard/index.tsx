import IReviewCardProps from "./ReviewCard";
import {
  ReviewCardDiv,
  UserContainerDiv,
  UserImageDiv,
  UserDetailDiv,
  UserNameDiv,
  UserEmailDiv,
  ReviewContainerDiv,
  ReviewRatingDiv,
  ReviewDescriptionDiv,
} from "./styles";

const ReviewCard = (props: IReviewCardProps) => {
  const { user, description, ratings } = props;
  return (
    <ReviewCardDiv>
      <UserContainerDiv>
        <UserImageDiv>R</UserImageDiv>
        <UserDetailDiv>
          <UserNameDiv>{user.name}</UserNameDiv>
          <UserEmailDiv>{user.email}</UserEmailDiv>
        </UserDetailDiv>
      </UserContainerDiv>
      <ReviewContainerDiv>
        <ReviewRatingDiv>{ratings}</ReviewRatingDiv>
        <ReviewDescriptionDiv>{description}</ReviewDescriptionDiv>
      </ReviewContainerDiv>
    </ReviewCardDiv>
  );
};

export default ReviewCard;
