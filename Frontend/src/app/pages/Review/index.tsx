import IReviewProps from "./Review";
import Layout from "../../components/Layout";
import ReviewCard from "../../components/ReviewCard";
import UserCard from "../../components/UserCard";
import {
  ReviewTextFieldDiv,
  ReviewContainerDiv,
  ReviewDetailDiv,
  MovieAndAddReviewDiv,
  MovieDetailDiv,
  ReviewDataDiv,
  ReviewFormDiv,
  ReviewRatingDiv,
  ReviewFormHeaderDiv,
  ReviewDetailHeaderDiv,
  ReviewSpanDiv,
  StyledSpan,
} from "./styles";
import MovieDetailCard from "../../components/MovieDetailCard";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { useState } from "react";

const movieDetail = {
  title: "Jug Jugg Jeeyo",
  released: "24 Jun 2022",
  plot: "Two couples from different generations confront their issues after marriage.",
  actors: "Varun Dhawan, Anil Kapoor, Kiara Advani",
  director: "Raj Mehta",
  runTime: "148 min",
  genre: "Comedy, Drama, Family",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMTg5YjlkZmItZWZjOC00ZWQ5LTk2MjctYmI2ZGYzODY0N2ZmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  imdbRating: "6.2",
  imdbID: "tt13449624",
  boxOffice: "$1,033,000",
};

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
];

const Review = (props: IReviewProps) => {
  const [checked, setChecked] = useState([false, false, false, false, false]);
  return (
    <>
      <Layout>
        <ReviewContainerDiv>
          <MovieAndAddReviewDiv>
            <MovieDetailDiv>
              <MovieDetailCard {...movieDetail} />
            </MovieDetailDiv>
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
