import "./ReviewCard.scss";
import IReviewCardProps from "./ReviewCard";

const ReviewCard = (props: IReviewCardProps) => {
  const { user, description, ratings } = props;
  return (
    <div className="review-card-container">
      <div className="user-container">
        <div className="user-image">R</div>
        <div className="user-detail">
          <div className="user-name">{user.name}</div>
          <div className="user-email">{user.email}</div>
        </div>
      </div>
      <div className="review-container">
        <div className="review-rating">{ratings}</div>
        <div className="review-description">{description}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
