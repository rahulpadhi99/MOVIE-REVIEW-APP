import Avatar from "../Avatar";
import IHeaderProps from "./Header";
import { HeaderContainerDiv, AvatarContainer, AppNameDiv } from "./styles";

const Header = (props: IHeaderProps) => {
  const userName = sessionStorage.getItem("user");
  const userDetail = userName && JSON.parse(userName);
  return (
    <>
      <HeaderContainerDiv>
        <AppNameDiv>The Movie Review App</AppNameDiv>
        <AvatarContainer>
          {userDetail?.name}
          <Avatar width={45} height={45}>
            {userDetail?.name[0]}
          </Avatar>
        </AvatarContainer>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
