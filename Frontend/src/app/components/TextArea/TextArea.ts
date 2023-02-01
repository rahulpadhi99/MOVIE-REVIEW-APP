export default interface ITextAreaProps {
  row: string;
  name: string;
  column: string;
  placeholder: string;
  error?: string;
  label?: string;
  register?: any;
  isValidated?: boolean;
  value?: string | undefined;
  defaultValue?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
