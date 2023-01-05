import ITextAreaProps from "./TextArea";
import { StyledLabel, StyledTextArea } from "./styles";

const TextArea = (props: ITextAreaProps) => {
  return (
    <>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      <StyledTextArea id={props.name} {...props}></StyledTextArea>
    </>
  );
};

export default TextArea;
