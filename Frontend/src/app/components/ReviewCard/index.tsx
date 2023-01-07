import { useState } from "react";
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
  StyledSpan,
} from "./styles";

const ReviewCard = (props: IReviewCardProps) => {
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const { user, description, ratings } = props;
  return (
    <ReviewCardDiv>
      <UserContainerDiv>
        <Avatar width={36} height={36}>
          R
        </Avatar>
        <UserDetailDiv>
          <UserNameDiv>{user.name}</UserNameDiv>
          <UserEmailDiv>{user.email}</UserEmailDiv>
        </UserDetailDiv>
      </UserContainerDiv>
      <ReviewContainerDiv>
        <ReviewRatingDiv>
          {checked.map((value) => {
            return <StyledSpan className={`fa fa-star checked`}></StyledSpan>;
          })}
          {ratings}
        </ReviewRatingDiv>
        <ReviewDescriptionDiv>{description}</ReviewDescriptionDiv>
      </ReviewContainerDiv>
    </ReviewCardDiv>
  );
};

export default ReviewCard;
