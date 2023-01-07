import { Avatar } from "@mui/material";
import IAvatarProps from "./Avatar";
import { StyledAvatar } from "./styles";

const AvatarComponent = (props: IAvatarProps) => {
  return (
    <StyledAvatar>
      <Avatar style={{ width: props.width, height: props.height }}>
        {props.children}
      </Avatar>
    </StyledAvatar>
  );
};

export default AvatarComponent;
