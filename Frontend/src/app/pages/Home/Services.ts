import axios from "../../authentication/interceptor";

export interface IQueryData {
  title: string;
  year: string;
}

export const getMovies = (queryData: IQueryData) => {
  let url = `${process.env.REACT_APP_BASE_URL}/movies?`;
  queryData.title && (url = url + `title=${queryData.title}`);
  queryData.year &&
    (url = url + `${queryData.title && "&"}year=${queryData.year}`);

  return axios.get(url);
};

export const addMovie = (queryData: IQueryData) => {
  let url = `${process.env.REACT_APP_BASE_URL}/movies`;
  return axios.post(url, queryData);
};
