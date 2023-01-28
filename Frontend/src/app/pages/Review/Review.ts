import { IUser } from "../Login/Login";

export default interface IReviewProps {}

export interface IReviewDataProps {
  _id: string;
  description: string;
  ratings: number;
  user: IUser;
  movie: string;
  createdAt: string;
  updatedAt: string;
}
export interface IReviewFormData {
  movieId: string;
  ratings: number | null;
  description: string;
}
