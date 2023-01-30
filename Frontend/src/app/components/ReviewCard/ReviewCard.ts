export interface IUser {
  name: string;
  email: string;
  password: string;
  _id?: string;
}

export default interface IReviewCardProps {
  user: IUser;
  ratings: number;
  description: string;
  onUpdate: () => void;
  onDelete: () => void;
}
