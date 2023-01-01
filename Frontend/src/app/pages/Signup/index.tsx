import ISignpProps from "./Signup";
import ButtonComponent from "../../components/Button";

const Signup = (props: ISignpProps) => {
  return (
    <>
      <div>Sign Up</div>
      <ButtonComponent onClick={() => console.log("clicked")}>
        Sign Up
      </ButtonComponent>
    </>
  );
};

export default Signup;
