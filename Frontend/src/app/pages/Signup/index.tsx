import ISignpProps from "./Signup";
import Button from "../../components/Button";

const Signup = (props: ISignpProps) => {
  return (
    <>
      <div>Sign Up</div>
      <Button kind={"primary"} onClick={() => console.log("clicked")}>
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
