import Input from "../../components/Input";
import Error from "../../components/Error";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Success from "../../components/Success";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import Backdrop from "../../components/Backdrop";
import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import IHomeProps, { IMoviesData, ISearchData } from "./Home";
import useQueryHook from "../../hooks/useQueryHook";
import useMutationHook from "../../hooks/useMutationHook";
import { addMovie, getMovies, IQueryData } from "./Services";
import {
  SearchContainerDiv,
  SearchMovieDiv,
  SearchYearDiv,
  SearchAndAddButtonDiv,
  MovieContainerDiv,
  MovieCardContainerDiv,
} from "./styles";

const intialQueryData = {
  title: "",
  year: "",
};

const Home = (props: IHomeProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [canGetAllMovies, setCanGetAllMovies] = useState<boolean>(false);
  const [allMovieData, setAllMovieData] = useState<IMoviesData[]>([]);
  const [queryData, setQueryData] = useState<IQueryData>(intialQueryData);

  const getAllYears = () => {
    let years = [];
    const currentYear = new Date().getFullYear();
    for (var i = 1990; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };

  const { status, refetch: retchMovies } = useQueryHook(
    ["getMovies"],
    getMovies,
    queryData,
    {
      enabled: canGetAllMovies,
      onSuccess: (data: any) => {
        setAllMovieData(data);
        setCanGetAllMovies(false);
      },
      onError: (error) => {},
    }
  );

  const { mutate } = useMutationHook(["addMovie"], addMovie);

  const selectMovieHandler = (movie: IMoviesData) => {
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

  const addMovieDataHandler = (movieData: ISearchData) => {
    mutate(movieData, {
      onSuccess: () => {
        retchMovies();
      },
      onError: (error) => {},
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
              {allMovieData?.map((movie: IMoviesData) => {
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
