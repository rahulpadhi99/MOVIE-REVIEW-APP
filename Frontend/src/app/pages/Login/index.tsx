import ILoginProps from "./Login";
import Button from "../../components/Button";

const Login = (props: ILoginProps) => {
  return (
    <>
      <div>Login Page</div>
      <Button kind={"primary"} onClick={() => console.log("clicked")}>
        Login
      </Button>
    </>
  );
};

export default Login;
