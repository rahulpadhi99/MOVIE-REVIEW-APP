import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import IFormProps, { IUser } from "./Form";
import { StyledForm, ButtonContainerDiv } from "./styles";

const Form = (props: IFormProps) => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState<IUser>(initialValue);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.submitHandler(user);
  };
  return (
    <>
      <StyledForm onSubmit={submitFormHandler}>
        <Input
          type="text"
          name="name"
          label="Name"
          value={user.name}
          onChange={changeHandler}
        ></Input>
        <Input
          type="text"
          name="email"
          label="Email"
          value={user.email}
          onChange={changeHandler}
        ></Input>
        <Input
          type="password"
          name="password"
          label="Passowrd"
          value={user.password}
          onChange={changeHandler}
        ></Input>
        <ButtonContainerDiv>
          <Button kind="secondary">{props.type}</Button>
        </ButtonContainerDiv>
      </StyledForm>
    </>
  );
};

export default Form;
