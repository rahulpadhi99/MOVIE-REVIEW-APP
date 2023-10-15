import axios from "../../authentication/interceptor";

interface IUserDetails {
  name: string;
  email: string;
  password: string;
}
export const signUpUser = (userDetails: IUserDetails) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/signUp`, userDetails);
};
