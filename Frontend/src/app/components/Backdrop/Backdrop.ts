import { IQueryData } from "../../pages/Home/Services";

export interface IBackDropProps {
  open: boolean;
  addMovieData: (movie: IQueryData) => void;
  onClick: () => void;
}
