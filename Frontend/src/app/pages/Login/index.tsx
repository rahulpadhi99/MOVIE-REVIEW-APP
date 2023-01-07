import ILoginProps from "./Login";
import Form from "../../components/Form";
import { LoginContainerDiv } from "./styles";
import React from "react";

const Login = (props: ILoginProps) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("login");
  };
  return (
    <LoginContainerDiv>
      <Form type="Login" onSubmit={submitHandler} />
    </LoginContainerDiv>
  );
};

export default Login;
