interface IUserData {
  _id: string;
  email: string;
  name: string;
}

export default interface IReviewCardProps {
  description: string;
  user: IUserData;
  ratings: number;
}
