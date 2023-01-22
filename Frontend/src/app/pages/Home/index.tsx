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
  SearchAndAddButtonDiv,
  MovieContainerDiv,
  MovieCardContainerDiv,
} from "./styles";
import { getMovies, IQueryData } from "./Services";
import useQueryHook from "../../hooks/useQueryHook";
import Success from "../../components/Success";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Backdrop from "../../components/Backdrop";

const Home = (props: IHomeProps) => {
  const navigate = useNavigate();
  const [queryData, setQueryData] = useState<IQueryData>({
    title: "",
    year: "",
  });
  const [canGetAllMovies, setCanGetAllMovies] = useState<boolean>(false);
  const [booleanStatus, setBooleanStatus] = useState(true);
  const [open, setOpen] = useState(false);
  const {
    status,
    data: allMovieData,
    refetch: retchMovies,
    error,
  } = useQueryHook(["getMovies"], getMovies, queryData, {
    enabled: canGetAllMovies,
  });

  const selectMovieHandler = (movie: IAllMoviesData) => {
    navigate("/review", { state: movie });
  };

  const openAddUserBackDropHandler = () => {
    setOpen(true);
  };

  const closeBackDropHandler = () => {
    setOpen(false);
  };

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setQueryData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    booleanStatus && setCanGetAllMovies(true);
    setBooleanStatus(false);
  }, []);

  console.log("open", open);
  return (
    <>
      <Layout>
        <SearchContainerDiv>
          <SearchMovieDiv>
            <Input
              label="Movie : "
              name="title"
              type="search"
              value={queryData?.title}
              onChange={changeHandler}
            />
          </SearchMovieDiv>
          <SearchYearDiv>
            <Select
              label="Year : "
              name="year"
              value={queryData?.year}
              onChange={changeHandler}
              options={["2020", "2021", "2022"]}
            />
          </SearchYearDiv>
          <SearchAndAddButtonDiv>
            <Button
              kind={"primary"}
              onClick={() => {
                retchMovies();
              }}
            >
              Search
            </Button>
            <Button kind={"primary"} onClick={openAddUserBackDropHandler}>
              Add Movie
            </Button>
          </SearchAndAddButtonDiv>
        </SearchContainerDiv>
        {status === "loading" && <Loading>Fetching Data....</Loading>}
        {status === "error" && <Error>Error Fetching Data....</Error>}
        {status === "success" && (
          <Success>
            <MovieContainerDiv>
              {allMovieData?.movies?.map((movie: IAllMoviesData) => {
                return (
                  <div>
                    <MovieCardContainerDiv>
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
                  </div>
                );
              })}
            </MovieContainerDiv>
          </Success>
        )}
        <Backdrop open={open} onClick={closeBackDropHandler} />
      </Layout>
    </>
  );
};

export default Home;
