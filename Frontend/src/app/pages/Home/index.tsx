import React, { useEffect, useState } from "react";
import IHomeProps, { IAllMoviesData } from "./Home";
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
import { getAllMovies } from "./Services";
import useQueryHook from "../../hooks/useQueryHook";

const Home = (props: IHomeProps) => {
  const navigate = useNavigate();
  const [allMovieData, setAllMovieData] = useState<IAllMoviesData[]>();

  const { status, data, isLoading, error } = useQueryHook(
    ["getAllMovies"],
    getAllMovies
  );
  console.log("result", status, data, error, isLoading);

  const selectMovieHandler = (movie: IAllMoviesData) => {
    navigate("/review", { state: movie });
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
  };
  useEffect(() => {
    getAllMovies().then((res) => setAllMovieData(res?.data?.movies));
  }, []);

  return (
    <>
      <Layout>
        <SearchContainerDiv className="search-container">
          <SearchMovieDiv className="search-movie">
            <Input
              label="Movie : "
              name="movie"
              type="search"
              value=""
              onChange={changeHandler}
            />
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
          {allMovieData?.map((movie: IAllMoviesData) => {
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
