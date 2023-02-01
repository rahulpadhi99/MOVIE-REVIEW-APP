import ITextAreaProps from "./TextArea";
import { StyledLabel, StyledTextArea } from "./styles";

const TextArea = (props: ITextAreaProps) => {
  const { register, isValidated, name, label, error } = props;
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {isValidated ? (
        <StyledTextArea
          id={props.name}
          {...props}
          {...register(name)}
        ></StyledTextArea>
      ) : (
        <StyledTextArea id={props.name} {...props}></StyledTextArea>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default TextArea;
