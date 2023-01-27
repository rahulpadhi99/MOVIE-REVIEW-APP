export interface IUser {
  name: string;
  email: string;
  password: string;
  _id?: string;
}

export default interface IReviewCardProps {
  description: string;
  user: IUser;
  ratings: number;
}
