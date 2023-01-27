import axios from "../../authentication/interceptor";

export interface IReviewQueryData {
  movieId: string;
  ratings: number;
  description: string;
}
export const getReviews = (movieId: string) => {
  let url = `http://localhost:8000/reviews?movieId=${movieId}`;
  return axios.get(url);
};

export const addReview = (reviewQueryData: IReviewQueryData) => {
  let url = `http://localhost:8000/reviews`;
  return axios.post(url, reviewQueryData);
};
