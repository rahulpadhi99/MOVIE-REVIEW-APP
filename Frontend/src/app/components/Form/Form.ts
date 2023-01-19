export default interface IFormProps {
  type: string;
  submitHandler: (user: IUser) => void;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
