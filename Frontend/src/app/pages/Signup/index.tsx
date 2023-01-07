import ISignpProps from "./Signup";

import Form from "../../components/Form";
import { SignupContainerDiv } from "./styles";

const Signup = (props: ISignpProps) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("signup");
  };
  return (
    <SignupContainerDiv>
      <Form type="Sign Up" onSubmit={submitHandler}></Form>
    </SignupContainerDiv>
  );
};

export default Signup;
