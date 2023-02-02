export default interface IHomeProps {}

export interface IMoviesData {
  _id: string;
  plot: string;
  title: string;
  genre: string;
  actors: string;
  poster: string;
  imdbID: string;
  runTime: string;
  director: string;
  released: string;
  boxOffice: string;
  createdAt: string;
  updatedAt: string;
  imdbRating: string;
}

export interface ISearchData {
  title: string;
  year: string;
}
