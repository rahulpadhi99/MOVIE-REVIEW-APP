import axios from "../../authentication/interceptor";

interface IUserDetails {
  name: string;
  email: string;
  password: string;
}
export const loginUser = (userDetails: IUserDetails) => {
  return axios.post("http://localhost:8000/login", userDetails);
};
