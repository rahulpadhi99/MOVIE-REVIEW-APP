import { ILoadingProps } from "./Loading";
import { LoadingDiv } from "./styles";

const Loading = (props: ILoadingProps) => {
  return <LoadingDiv>{props.children}</LoadingDiv>;
};

export default Loading;
