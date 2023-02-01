import { loginUser } from "./Services";
import Form from "../../components/Form";
import { LoginContainerDiv } from "./styles";
import ILoginProps, { IUser } from "./Login";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useMutationHook from "../../hooks/useMutationHook";

const Login = (props: ILoginProps) => {
  const navigate = useNavigate();

  const { mutate } = useMutationHook(["addMovie"], loginUser);

  const onSubmit = (user: IUser) => {
    mutate(user, {
      onSuccess: (res: any) => {
        const userData = JSON.stringify(res?.data?.userDetails);
        sessionStorage.setItem("user", userData);
        navigate("/home");
      },
      onError: (error) => {},
    });
  };

  return (
    <LoginContainerDiv>
      <Form type="Login" onSubmit={onSubmit} />
    </LoginContainerDiv>
  );
};

export default Login;
