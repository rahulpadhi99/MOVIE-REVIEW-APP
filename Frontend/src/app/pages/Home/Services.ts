import axios from "../../authentication/interceptor";

export const getAllMovies = () => {
  return axios.get("http://localhost:8000/movies");
};
