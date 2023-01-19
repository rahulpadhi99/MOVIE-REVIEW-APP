import IInputProps from "./Input";
import { StyledLabel, StyledInput } from "./styles";

const Input = (props: IInputProps) => {
  return (
    <>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      <StyledInput {...props}></StyledInput>
    </>
  );
};

export default Input;
