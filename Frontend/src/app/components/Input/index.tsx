import IInputProps from "./Input";
import { StyledLabel, StyledInput, ErrorDiv } from "./styles";

const Input = (props: IInputProps) => {
  const { name, label, isValidated, register, error } = props;

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      {isValidated ? (
        <StyledInput {...props} {...register(name)}></StyledInput>
      ) : (
        <StyledInput {...props}></StyledInput>
      )}
      {error && <ErrorDiv>{error}</ErrorDiv>}
    </>
  );
};

export default Input;
