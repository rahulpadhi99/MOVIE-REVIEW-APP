import ILoginProps from "./Login";
import Button from "../../components/Button";

const Login = (props: ILoginProps) => {
  return (
    <>
      <div>Login Page</div>
      <Button kind={"primary"} onClick={() => {}}>
        Login
      </Button>
    </>
  );
};

export default Login;
