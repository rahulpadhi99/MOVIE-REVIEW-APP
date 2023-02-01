import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import IFormProps, { IUser } from "./Form";
import { StyledForm, ButtonContainerDiv } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { schema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = (props: IFormProps) => {
  const methods = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  const submitFormHandler = (data: IUser) => {
    props.onSubmit(data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(submitFormHandler)}>
          <Input
            type="text"
            name="name"
            label="Name"
            isValidated
            register={methods.register}
            error={methods.formState.errors.name?.message}
          ></Input>
          <Input
            type="email"
            name="email"
            label="Email"
            isValidated
            register={methods.register}
            error={methods.formState.errors.email?.message}
          ></Input>
          <Input
            type="password"
            name="password"
            label="Password"
            isValidated
            register={methods.register}
            error={methods.formState.errors.password?.message}
          ></Input>
          <ButtonContainerDiv>
            <Button kind="secondary">{props.type}</Button>
          </ButtonContainerDiv>
        </StyledForm>
      </FormProvider>
    </>
  );
};

export default Form;
