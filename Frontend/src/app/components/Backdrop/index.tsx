import { Backdrop } from "@mui/material";
import Input from "../Input";
import Button from "../Button";
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
import Select from "../Select";

const BackdropComponent = (props: IBackDropProps) => {
  console.log("clicked", props);
  const { open, onClick } = props;

  const changeHandler = () => {};
  return (
    <BackDropDiv>
      <Backdrop className="backdrop" open={open}>
        <BackDropContentDiv>
          <TitleContainerDiv>
            <TitleDiv>Add a Movie</TitleDiv>
            <CloseButtonDiv onClick={onClick}>close</CloseButtonDiv>
          </TitleContainerDiv>
          <form>
            <MovieNameInputDiv>
              <Input
                type="text"
                name="name"
                label="Movie Name : "
                value=" "
                onChange={changeHandler}
              />
            </MovieNameInputDiv>
            <MovieYearSelectDiv>
              <Select
                label="Release Year : "
                name="year"
                value=""
                onChange={changeHandler}
                options={["2020", "2021", "2022"]}
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
