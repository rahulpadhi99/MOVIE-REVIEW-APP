import IFormProps from "./Form";
import Input from "../Input";
import Button from "../Button";
import { StyledForm, ButtonContainerDiv } from "./styles";

const Form = (props: IFormProps) => {
  return (
    <>
      <StyledForm onSubmit={props.onSubmit}>
        <Input type="text" name="first-name" label="First name : "></Input>
        <Input type="text" name="last-name" label="Last name : "></Input>
        <Input type="text" name="email" label="Email : "></Input>
        <ButtonContainerDiv>
          <Button kind="secondary">{props.type}</Button>
        </ButtonContainerDiv>
      </StyledForm>
    </>
  );
};

export default Form;
