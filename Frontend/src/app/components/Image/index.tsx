import IImageProps from "./Image";
import { StyledImage } from "./styles";

const Image = (props: IImageProps) => {
  return <StyledImage {...props}></StyledImage>;
};

export default Image;
