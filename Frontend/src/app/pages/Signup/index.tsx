import Form from "../../components/Form";
import ISignpProps, { IUser } from "./Signup";
import { SignupContainerDiv } from "./styles";
import { signUpUser } from "./Services";

const Signup = (props: ISignpProps) => {
  const submitHandler = (user: IUser) => {
    signUpUser(user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("signup-user", user);
  };
  return (
    <SignupContainerDiv>
      <Form type="Sign Up" submitHandler={submitHandler}></Form>
    </SignupContainerDiv>
  );
};

export default Signup;
