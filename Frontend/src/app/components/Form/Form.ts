export default interface IFormProps {
  type: string;
  onSubmit: (data: IUser) => void;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
