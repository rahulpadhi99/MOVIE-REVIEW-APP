import axios from "../../authentication/interceptor";

export interface IAddQueryData {
  movieId: string;
  ratings: number;
  description: string;
}

export interface IUpdateQueryData {
  ratings: number;
  reviewId: string;
  description: string;
}

export const getReviews = (movieId: string) => {
  let url = `${process.env.REACT_APP_BASE_URL}/reviews?movieId=${movieId}`;
  return axios.get(url);
};

export const addReview = (reviewQueryData: IAddQueryData) => {
  let url = `${process.env.REACT_APP_BASE_URL}/reviews`;
  return axios.post(url, reviewQueryData);
};

export const updateReview = (reviewQueryData: IUpdateQueryData) => {
  const { reviewId, ...updatedData } = reviewQueryData;
  let url = `${process.env.REACT_APP_BASE_URL}/reviews/${reviewId}`;
  return axios.put(url, updatedData);
};

export const deleteReview = (reviewId: string) => {
  let url = `${process.env.REACT_APP_BASE_URL}/reviews/${reviewId}`;
  return axios.delete(url);
};
