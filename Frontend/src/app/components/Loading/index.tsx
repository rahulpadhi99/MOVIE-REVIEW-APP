import { LoadingDiv } from "./styles";
import { ILoadingProps } from "./Loading";

const Loading = (props: ILoadingProps) => {
  return <LoadingDiv>{props.children}</LoadingDiv>;
};

export default Loading;
