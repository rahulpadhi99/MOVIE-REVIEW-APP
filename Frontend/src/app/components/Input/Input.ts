export default interface InputProps {
  type: string;
  name: string;
  label: string;
  error?: string;
  value?: string;
  register?: any;
  isValidated?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
