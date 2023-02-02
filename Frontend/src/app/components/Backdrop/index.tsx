import Icon from "../Icon";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";
import { Backdrop } from "@mui/material";
import { IBackDropProps } from "./Backdrop";
import { SearchSchema } from "../../validation";
import { ISearchData } from "../../pages/Home/Home";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import {
  TitleDiv,
  StyledForm,
  BackDropDiv,
  CloseButtonDiv,
  TitleContainerDiv,
  ButtonContainerDiv,
  BackDropContentDiv,
} from "./styles";

const BackdropComponent = (props: IBackDropProps) => {
  const { open, onClick } = props;

  const methods = useForm<ISearchData>({
    resolver: yupResolver(SearchSchema),
  });

  const getAllYears = () => {
    let years = [];
    const currentYear = new Date().getFullYear();
    for (var i = 1990; i <= currentYear; i++) {
      years.push(i);
    }
    return years;
  };

  const submitMovieHandler = (data: ISearchData) => {
    props.addMovieData(data);
    methods.reset();
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
          <FormProvider {...methods}>
            <StyledForm onSubmit={methods.handleSubmit(submitMovieHandler)}>
              <Input
                type="text"
                name="title"
                label="Movie Name"
                isValidated
                register={methods.register}
                error={methods.formState.errors.title?.message}
              />
              <Select
                label="Release Year"
                name="year"
                options={getAllYears()}
                isValidated
                register={methods.register}
                error={methods.formState.errors.year?.message}
              />
              <ButtonContainerDiv>
                <Button kind="secondary">Add</Button>
              </ButtonContainerDiv>
            </StyledForm>
          </FormProvider>
        </BackDropContentDiv>
      </Backdrop>
    </BackDropDiv>
  );
};

export default BackdropComponent;
