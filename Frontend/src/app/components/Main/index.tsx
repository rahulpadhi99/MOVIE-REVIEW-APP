import "./Main.scss";
import IMainProps from "./Main";

const Main = (props: IMainProps) => {
  return <main className="main-container">{props.children}</main>;
};

export default Main;
