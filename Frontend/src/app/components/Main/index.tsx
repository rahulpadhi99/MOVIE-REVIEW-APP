import IMainProps from "./Main";
import { StyledMain } from "./styles";

const Main = (props: IMainProps) => {
  return <StyledMain className="main-container">{props.children}</StyledMain>;
};

export default Main;
