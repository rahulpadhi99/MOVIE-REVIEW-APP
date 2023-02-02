import { signUpUser } from "./Services";
import Form from "../../components/Form";
import ISignpProps, { IUser } from "./Signup";
import { SignupContainerDiv } from "./styles";
import { useNavigate } from "react-router-dom";
import useMutationHook from "../../hooks/useMutationHook";

const Signup = (props: ISignpProps) => {
  const navigate = useNavigate();

  const { mutate } = useMutationHook(["addMovie"], signUpUser);

  const onSubmit = (user: IUser) => {
    mutate(user, {
      onSuccess: (res: any) => {
        navigate("/login");
      },
      onError: (error) => {},
    });
  };
  return (
    <SignupContainerDiv>
      <Form type="Sign Up" onSubmit={onSubmit}></Form>
    </SignupContainerDiv>
  );
};

export default Signup;
