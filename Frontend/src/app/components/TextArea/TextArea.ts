export default interface ITextAreaProps {
  name: string;
  row: string;
  value: string | undefined;
  column: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
}
