import { StyledButton } from "./styles";
import IButtonProps from "./Button";

const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
