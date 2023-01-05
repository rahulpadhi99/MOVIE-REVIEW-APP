import Avatar from "../Avatar";
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

const ReviewCard = (props: IReviewCardProps) => {
  const { user, description, ratings } = props;
  return (
    <ReviewCardDiv>
      <UserContainerDiv>
        <Avatar></Avatar>
        <UserDetailDiv>
          <UserNameDiv>{user.name}</UserNameDiv>
          <UserEmailDiv>{user.email}</UserEmailDiv>
        </UserDetailDiv>
      </UserContainerDiv>
      <ReviewContainerDiv>
        <ReviewRatingDiv>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          {ratings}
        </ReviewRatingDiv>
        <ReviewDescriptionDiv>{description}</ReviewDescriptionDiv>
      </ReviewContainerDiv>
    </ReviewCardDiv>
  );
};

export default ReviewCard;
