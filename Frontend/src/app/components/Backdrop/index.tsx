import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import Icon from "../Icon";
import { Backdrop } from "@mui/material";
import { IBackDropProps } from "./Backdrop";
import {
  BackDropDiv,
  ButtonContainerDiv,
  BackDropContentDiv,
  TitleContainerDiv,
  MovieNameInputDiv,
  MovieYearSelectDiv,
  TitleDiv,
  CloseButtonDiv,
} from "./styles";
import { useState } from "react";
import { IQueryData } from "../../pages/Home/Services";

const BackdropComponent = (props: IBackDropProps) => {
  const { open, onClick } = props;
  const [movieData, setMovieData] = useState<IQueryData>({
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

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log(event.target.name, event.target.value);
    setMovieData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitMovieHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addMovieData(movieData);
  };
  return (
    <BackDropDiv>
      <Backdrop className="backdrop" open={open}>
        <BackDropContentDiv>
          <TitleContainerDiv>
            <TitleDiv>Add a Movie</TitleDiv>
            <CloseButtonDiv onClick={onClick}>
              <Icon name="clear" />
            </CloseButtonDiv>
          </TitleContainerDiv>
          <form onSubmit={submitMovieHandler}>
            <MovieNameInputDiv>
              <Input
                type="text"
                name="title"
                label="Movie Name : "
                value={movieData?.title}
                onChange={changeHandler}
              />
            </MovieNameInputDiv>
            <MovieYearSelectDiv>
              <Select
                label="Release Year : "
                name="year"
                value={movieData?.year}
                onChange={changeHandler}
                options={getAllYears()}
              />
            </MovieYearSelectDiv>
            <ButtonContainerDiv>
              <Button kind="secondary">Add</Button>
            </ButtonContainerDiv>
          </form>
        </BackDropContentDiv>
      </Backdrop>
    </BackDropDiv>
  );
};

export default BackdropComponent;
