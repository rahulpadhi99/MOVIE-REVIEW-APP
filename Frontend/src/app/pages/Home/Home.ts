export default interface IHomeProps {}

export interface IMoviesData {
  _id: string;
  title: string;
  released: string;
  plot: string;
  actors: string;
  director: string;
  runTime: string;
  genre: string;
  poster: string;
  imdbRating: string;
  imdbID: string;
  boxOffice: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISearchData {
  title: string;
  year: string;
}
