import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import ILoginProps, { IUser } from "./Login";
import { loginUser } from "./Services";
import { LoginContainerDiv } from "./styles";

const Login = (props: ILoginProps) => {
  const navigate = useNavigate();
  const submitHandler = (user: IUser) => {
    loginUser(user)
      .then((res) => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <LoginContainerDiv>
      <Form type="Login" submitHandler={submitHandler} />
    </LoginContainerDiv>
  );
};

export default Login;
