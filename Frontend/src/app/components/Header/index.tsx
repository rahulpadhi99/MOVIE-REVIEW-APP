import Avatar from "../Avatar";
import IHeaderProps from "./Header";
import { useLocation } from "react-router-dom";
import {
  AppNameDiv,
  UserNameDiv,
  AvatarContainer,
  HeaderContainerDiv,
} from "./styles";

const Header = (props: IHeaderProps) => {
  const location = useLocation();
  const pathName = location?.pathname;
  const userName = sessionStorage.getItem("user");
  const userDetail = userName && JSON.parse(userName);

  return (
    <>
      <HeaderContainerDiv>
        <AppNameDiv>The Movie Review App</AppNameDiv>
        <AvatarContainer>
          <UserNameDiv> {userDetail?.name}</UserNameDiv>
          {pathName !== "/" && (
            <Avatar name="user" background="grey">
              <UserNameDiv>{userDetail?.name[0]}</UserNameDiv>
            </Avatar>
          )}
        </AvatarContainer>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
