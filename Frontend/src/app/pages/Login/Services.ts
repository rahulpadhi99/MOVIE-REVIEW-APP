import axios from "../../authentication/interceptor";

interface IUserDetails {
  name: string;
  email: string;
  password: string;
}
export const loginUser = (userDetails: IUserDetails) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/login`, userDetails);
};
