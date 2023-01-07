import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  WelcomeContainerDiv,
  WelcomeMessageDiv,
  SignupMessageDiv,
  LoginMessageDiv,
  AppNameDiv,
} from "./styles";
const Welcome = () => {
  return (
    <Layout>
      <WelcomeContainerDiv>
        <WelcomeMessageDiv>
          Welcome to the
          <AppNameDiv>MOVIE REVIEW APP</AppNameDiv>
        </WelcomeMessageDiv>
        <SignupMessageDiv>
          New to our app ? Please{" "}
          <Link to={"/signup"} className="signup-link">
            signup
          </Link>
        </SignupMessageDiv>
        <LoginMessageDiv>
          Already have an account? Please{" "}
          <Link to={"/login"} className="login-link">
            login
          </Link>
        </LoginMessageDiv>
      </WelcomeContainerDiv>
    </Layout>
  );
};
export default Welcome;
