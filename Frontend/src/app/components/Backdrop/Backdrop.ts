import { IQueryData } from "../../pages/Home/Services";

export interface IBackDropProps {
  open: boolean;
  onClick: () => void;
  addMovieData: (movie: IQueryData) => void;
}
