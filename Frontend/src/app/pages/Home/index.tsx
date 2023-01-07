import IHomeProps from "./Home";
import Layout from "../../components/Layout";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import MovieCard from "../../components/MovieCard";
import { useNavigate } from "react-router-dom";
import {
  SearchContainerDiv,
  SearchMovieDiv,
  SearchYearDiv,
  SearchButtonDiv,
  MovieContainerDiv,
  MovieCardContainerDiv,
} from "./styles";

const Home = (props: IHomeProps) => {
  const navigate = useNavigate();
  const movieData = [
    {
      _id: "63b142e2ba6769a14af61775",
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
      createdAt: "2023-01-01T08:22:58.605Z",
      updatedAt: "2023-01-01T08:22:58.605Z",
    },
    {
      _id: "63b142e2ba6769a14af61775",
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
      createdAt: "2023-01-01T08:22:58.605Z",
      updatedAt: "2023-01-01T08:22:58.605Z",
    },
    {
      _id: "63b142e2ba6769a14af61775",
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
      createdAt: "2023-01-01T08:22:58.605Z",
      updatedAt: "2023-01-01T08:22:58.605Z",
    },
    {
      _id: "63b142e2ba6769a14af61775",
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
      createdAt: "2023-01-01T08:22:58.605Z",
      updatedAt: "2023-01-01T08:22:58.605Z",
    },
  ];
  const selectMovieHandler = (movie: any) => {
    navigate("/review");
  };

  return (
    <>
      <Layout>
        <SearchContainerDiv className="search-container">
          <SearchMovieDiv className="search-movie">
            <Input label="Movie : " name="movie" type="search" />
          </SearchMovieDiv>
          <SearchYearDiv className="search-year">
            <Select
              label="Year : "
              name={"year"}
              options={["2020", "2021", "2022"]}
            />
          </SearchYearDiv>
          <SearchButtonDiv className="search-button">
            <Button
              kind={"primary"}
              onClick={() => {
                console.log("ss");
              }}
            >
              Search
            </Button>
          </SearchButtonDiv>
        </SearchContainerDiv>
        <MovieContainerDiv className="movie-container">
          {movieData.map((movie) => {
            return (
              <MovieCardContainerDiv className="movie-card-container">
                <MovieCard
                  imageDetail={{
                    src: movie.poster,
                    size: "small",
                    alt: "image.png",
                  }}
                  movieName={movie.title}
                  movieRelease={movie.released}
                  movieGenre={movie.genre}
                  movieTime={movie.runTime}
                  onClick={() => selectMovieHandler(movie)}
                />
              </MovieCardContainerDiv>
            );
          })}
        </MovieContainerDiv>
      </Layout>
    </>
  );
};

export default Home;
