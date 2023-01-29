import Form from "../../components/Form";
import ISignpProps, { IUser } from "./Signup";
import { SignupContainerDiv } from "./styles";
import { signUpUser } from "./Services";
import { useNavigate } from "react-router-dom";

const Signup = (props: ISignpProps) => {
  const navigate = useNavigate();
  const submitHandler = (user: IUser) => {
    signUpUser(user)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {});
  };
  return (
    <SignupContainerDiv>
      <Form type="Sign Up" submitHandler={submitHandler}></Form>
    </SignupContainerDiv>
  );
};

export default Signup;
