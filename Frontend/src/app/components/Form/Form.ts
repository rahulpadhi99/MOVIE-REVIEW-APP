export default interface IFormProps {
  type: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
