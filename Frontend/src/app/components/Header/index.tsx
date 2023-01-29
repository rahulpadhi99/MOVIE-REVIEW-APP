import Avatar from "../Avatar";
import IHeaderProps from "./Header";
import {
  HeaderContainerDiv,
  AvatarContainer,
  AppNameDiv,
  UserNameDiv,
} from "./styles";

const Header = (props: IHeaderProps) => {
  const userName = sessionStorage.getItem("user");
  const userDetail = userName && JSON.parse(userName);

  return (
    <>
      <HeaderContainerDiv>
        <AppNameDiv>The Movie Review App</AppNameDiv>
        <AvatarContainer>
          <UserNameDiv> {userDetail?.name}</UserNameDiv>
          <Avatar name="user" background="grey">
            <UserNameDiv>{userDetail?.name[0]}</UserNameDiv>
          </Avatar>
        </AvatarContainer>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
