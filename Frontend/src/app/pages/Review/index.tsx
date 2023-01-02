import IReviewProps from "./Review";
import Layout from "../../components/Layout";
import ReviewCard from "../../components/ReviewCard";
import { ReviewContainerDiv, ReviewDetailDiv, MovieDetailDiv } from "./styles";

const reviewData = [
  {
    _id: "63b1ae79b03488e10ab1c96d",
    description: "A great and funny movie",
    ratings: 4,
    user: {
      _id: "63b1ad664c77f7dfd2d95c9b",
      email: "user@gmail.com",
      name: "user-1",
    },
    movie: "63b142e2ba6769a14af61775",
    createdAt: "2023-01-01T16:02:01.317Z",
    updatedAt: "2023-01-01T16:02:01.317Z",
  },
  {
    _id: "63b1ae79b03488e10ab1c96d",
    description: "A great and funny movie",
    ratings: 4,
    user: {
      _id: "63b1ad664c77f7dfd2d95c9b",
      email: "user@gmail.com",
      name: "user-1",
    },
    movie: "63b142e2ba6769a14af61775",
    createdAt: "2023-01-01T16:02:01.317Z",
    updatedAt: "2023-01-01T16:02:01.317Z",
  },
];

const Review = (props: IReviewProps) => {
  return (
    <>
      <Layout>
        <ReviewContainerDiv className="review-page-container">
          <MovieDetailDiv className="movie-detail-container">
            Review
          </MovieDetailDiv>
          <ReviewDetailDiv className="review-detail-container">
            Reviews
            {reviewData.map((review) => {
              return (
                <ReviewCard
                  user={review.user}
                  description={review.description}
                  ratings={review.ratings}
                />
              );
            })}
          </ReviewDetailDiv>
        </ReviewContainerDiv>
      </Layout>
    </>
  );
};

export default Review;
