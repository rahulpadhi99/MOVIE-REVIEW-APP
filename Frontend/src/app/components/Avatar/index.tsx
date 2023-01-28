import { Avatar } from "@mui/material";
import IAvatarProps from "./Avatar";
import { StyledAvatar } from "./styles";

const AvatarComponent = (props: IAvatarProps) => {
  return (
    <StyledAvatar {...props}>
      <Avatar className="avatar">{props.children}</Avatar>
    </StyledAvatar>
  );
};

export default AvatarComponent;
