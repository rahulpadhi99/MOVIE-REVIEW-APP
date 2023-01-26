import axios from "../../authentication/interceptor";

export const getReviews = (movieId: string) => {
  let url = `http://localhost:8000/reviews?movieId=${movieId}`;
  return axios.get(url);
};
