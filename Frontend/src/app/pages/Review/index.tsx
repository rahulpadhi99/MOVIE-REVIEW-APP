import IReviewProps from "./Review";
import Layout from "../../components/Layout";
import ReviewCard from "../../components/ReviewCard";
import {
  ReviewTextFieldDiv,
  ReviewContainerDiv,
  ReviewDetailDiv,
  MovieAndAddReviewDiv,
  MovieDetailDiv,
  ReviewDataDiv,
  ReviewFormDiv,
  ReviewSummaryDiv,
  ReviewSummaryHeaderDiv,
  ReviewSummaryDetailDiv,
  TotalReviewDiv,
  PositiveReviewDiv,
  AverageReviewDiv,
  ReviewRatingDiv,
  NegativeReviewDiv,
  ReviewFormHeaderDiv,
  ReviewDetailHeaderDiv,
  ReviewSpanDiv,
  StyledSpan,
} from "./styles";
import MovieDetailCard from "../../components/MovieDetailCard";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  const movieDetail = location?.state;
  console.log(movieDetail);
  const [checked, setChecked] = useState([false, false, false, false, false]);
  return (
    <>
      <Layout>
        <ReviewContainerDiv>
          <MovieAndAddReviewDiv>
            <MovieDetailDiv>
              <MovieDetailCard {...movieDetail} />
            </MovieDetailDiv>
            <ReviewSummaryDiv>
              <ReviewSummaryHeaderDiv>Review Summary</ReviewSummaryHeaderDiv>
              <ReviewSummaryDetailDiv>
                <TotalReviewDiv>50</TotalReviewDiv>
                <PositiveReviewDiv>15</PositiveReviewDiv>
                <AverageReviewDiv>30</AverageReviewDiv>
                <NegativeReviewDiv>5</NegativeReviewDiv>
              </ReviewSummaryDetailDiv>
            </ReviewSummaryDiv>
          </MovieAndAddReviewDiv>
          <ReviewDetailDiv>
            <ReviewDetailHeaderDiv>Reviews</ReviewDetailHeaderDiv>
            <ReviewDataDiv>
              {reviewData.map((review) => {
                return (
                  <ReviewCard
                    user={review.user}
                    description={review.description}
                    ratings={review.ratings}
                  />
                );
              })}
            </ReviewDataDiv>
            <ReviewFormDiv>
              <ReviewFormHeaderDiv>Submit a review</ReviewFormHeaderDiv>
              <ReviewRatingDiv>
                Submit Rating :
                <ReviewSpanDiv>
                  {checked.map((value) => {
                    return (
                      <StyledSpan className={`fa fa-star checked`}></StyledSpan>
                    );
                  })}
                </ReviewSpanDiv>
              </ReviewRatingDiv>
              <ReviewTextFieldDiv>
                <TextArea
                  name="review"
                  row="2"
                  column="4"
                  label="Comment : "
                  placeholder="Write a review"
                />
              </ReviewTextFieldDiv>
              <Button kind="secondary" onClick={() => {}}>
                Submit
              </Button>
            </ReviewFormDiv>
          </ReviewDetailDiv>
        </ReviewContainerDiv>
      </Layout>
    </>
  );
};

export default Review;
