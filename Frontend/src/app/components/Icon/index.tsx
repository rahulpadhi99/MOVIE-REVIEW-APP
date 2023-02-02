import { IIconProps } from "./Icon";
import ClearIcon from "@mui/icons-material/Clear";

const Icon = (props: IIconProps) => {
  const getIcon = (name: string) => {
    if (name === "clear") {
      return <ClearIcon />;
    }
  };
  return <div>{getIcon(props.name)}</div>;
};

export default Icon;
