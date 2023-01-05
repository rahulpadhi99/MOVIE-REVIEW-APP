import IInputProps from "./Input";
import { StyledLabel, StyledInput } from "./styles";

const Input = (props: IInputProps) => {
  return (
    <>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      <StyledInput
        type={props.type}
        id={props.name}
        name={props.name}
      ></StyledInput>
    </>
  );
};

export default Input;
