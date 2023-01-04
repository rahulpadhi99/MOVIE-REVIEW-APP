import IReviewProps from "./Review";
import Layout from "../../components/Layout";
import ReviewCard from "../../components/ReviewCard";
import UserCard from "../../components/UserCard";
import {
  ReviewContainerDiv,
  ReviewDetailDiv,
  MovieAndUserDetailDiv,
  MovieDetailDiv,
  UserDetailDiv,
} from "./styles";
import MovieDetailCard from "../../components/MovieDetailCard";

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
];

const Review = (props: IReviewProps) => {
  return (
    <>
      <Layout>
        <ReviewContainerDiv>
          <MovieAndUserDetailDiv>
            <MovieDetailDiv>
              <MovieDetailCard {...movieDetail} />
            </MovieDetailDiv>
            <UserDetailDiv>
              <UserCard />
            </UserDetailDiv>
          </MovieAndUserDetailDiv>
          <ReviewDetailDiv>
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
