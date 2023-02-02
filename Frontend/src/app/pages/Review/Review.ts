import { IUser } from "../Login/Login";

export default interface IReviewProps {}

export interface IReviewDataProps {
  _id: string;
  user: IUser;
  movie: string;
  ratings: number;
  createdAt: string;
  updatedAt: string;
  description: string;
}
export interface IReviewFormData {
  description: string;
  ratings: number | null;
  movieId?: string;
  reviewId?: string;
}
