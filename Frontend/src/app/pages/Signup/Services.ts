import axios from "../../authentication/interceptor";

interface IUserDetails {
  email: string;
  name: string;
  password: string;
}
export const signUpUser = (userDetails: IUserDetails) => {
  return axios.post("http://localhost:8000/signUp", userDetails);
};
