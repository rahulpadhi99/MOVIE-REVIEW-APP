import "./Home.scss";
import IHomeProps from "./Home";
import Layout from "../../components/Layout";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Button from "../../components/Button";
import MovieCard from "../../components/MovieCard";

const Home = (props: IHomeProps) => {
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
  ];
  const selectMovieHandler = (movie: any) => {
    console.log("movie selected", movie);
  };
  return (
    <>
      <Layout>
        <div className="search-container">
          <div className="search-movie">
            <Input label="Movie : " name="movie" type="search" />
          </div>
          <div className="search-year">
            <Select
              label="Year : "
              name={"year"}
              options={["2020", "2021", "2022"]}
            />
          </div>
          <div className="search-button">
            <Button onClick={() => console.log("search")}>Search</Button>
          </div>
        </div>
        <div className="movie-container">
          {movieData.map((movie) => {
            return (
              <div className="movie-card-container">
                <MovieCard
                  imageDetail={{
                    className: "movie-image",
                    src: movie.poster,
                    alt: "image.png",
                  }}
                  movieName={movie.title}
                  movieRelease={movie.released}
                  movieGenre={movie.genre}
                  movieTime={movie.runTime}
                  movieRating={movie.imdbRating}
                  onClick={() => selectMovieHandler(movie)}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
