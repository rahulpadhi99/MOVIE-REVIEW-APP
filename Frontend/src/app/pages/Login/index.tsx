import { loginUser } from "./Services";
import Form from "../../components/Form";
import { LoginContainerDiv } from "./styles";
import ILoginProps, { IUser } from "./Login";
import { useNavigate } from "react-router-dom";

const Login = (props: ILoginProps) => {
  const navigate = useNavigate();
  const submitHandler = (user: IUser) => {
    loginUser(user)
      .then((res) => {
        const userData = JSON.stringify(res?.data?.userDetails);
        sessionStorage.setItem("user", userData);
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
