import Avatar from "../Avatar";
import Rating from "../Rating";
import IReviewCardProps from "./ReviewCard";
import {
  ReviewCardDiv,
  UserContainerDiv,
  UserDetailDiv,
  UserNameDiv,
  UserEmailDiv,
  ReviewContainerDiv,
  ReviewRatingDiv,
  ReviewDescriptionDiv,
} from "./styles";
//36px
const ReviewCard = (props: IReviewCardProps) => {
  const { user, description, ratings } = props;
  return (
    <ReviewCardDiv>
      <UserContainerDiv>
        <Avatar name="review" background="orange">
          {user.name[0]}
        </Avatar>
        <UserDetailDiv>
          <UserNameDiv>{user.name}</UserNameDiv>
          <UserEmailDiv>{user.email}</UserEmailDiv>
        </UserDetailDiv>
      </UserContainerDiv>
      <ReviewContainerDiv>
        <ReviewRatingDiv>
          <Rating size="medium" value={ratings} />
        </ReviewRatingDiv>
        <ReviewDescriptionDiv>{description}</ReviewDescriptionDiv>
      </ReviewContainerDiv>
    </ReviewCardDiv>
  );
};

export default ReviewCard;
