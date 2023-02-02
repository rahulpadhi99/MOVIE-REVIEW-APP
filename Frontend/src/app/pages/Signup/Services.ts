import axios from "../../authentication/interceptor";

interface IUserDetails {
  name: string;
  email: string;
  password: string;
}
export const signUpUser = (userDetails: IUserDetails) => {
  return axios.post("http://localhost:8000/signUp", userDetails);
};
