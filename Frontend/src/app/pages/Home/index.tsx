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
import { addMovie, getMovies, IQueryData } from "./Services";
import useQueryHook from "../../hooks/useQueryHook";
import Success from "../../components/Success";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Backdrop from "../../components/Backdrop";
import useMutationHook from "../../hooks/useMutationHook";

const Home = (props: IHomeProps) => {
  const navigate = useNavigate();
  const [queryData, setQueryData] = useState<IQueryData>({
    title: "",
    year: "",
  });

  const getAllYears = () => {
    let years = [];
    const currentYear = new Date().getFullYear();
    for (var i = 1990; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };

  const [canGetAllMovies, setCanGetAllMovies] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const {
    status,
    data: allMovieData,
    refetch: retchMovies,
    error,
  } = useQueryHook(["getMovies"], getMovies, queryData, {
    enabled: canGetAllMovies,
  });

  const {
    data,
    error: mutationError,
    mutate,
  } = useMutationHook(["addMovie"], addMovie);

  const selectMovieHandler = (movie: IAllMoviesData) => {
    navigate("/review", { state: movie });
  };

  const openAddUserBackDropHandler = () => {
    setQueryData({
      title: "",
      year: "",
    });
    setOpen(!open);
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

  const addMovieDataHandler = (movieData: IQueryData) => {
    mutate(movieData, {
      onSuccess: () => {
        retchMovies();
      },
      onError: (error) => {
        console.log(error);
      },
    });
    setOpen(false);
  };

  useEffect(() => {
    !open && setCanGetAllMovies(true);
  }, [open]);

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
              options={getAllYears()}
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
              {allMovieData?.map((movie: IAllMoviesData) => {
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
        <Backdrop
          open={open}
          onClick={closeBackDropHandler}
          addMovieData={addMovieDataHandler}
        />
      </Layout>
    </>
  );
};

export default Home;
