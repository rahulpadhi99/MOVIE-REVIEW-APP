import { IErrorProps } from "./Error";
import { ErrorDiv } from "./styles";

const Error = (props: IErrorProps) => {
  return <ErrorDiv>{props.children}</ErrorDiv>;
};

export default Error;
