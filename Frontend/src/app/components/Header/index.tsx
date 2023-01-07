import Avatar from "../Avatar";
import IHeaderProps from "./Header";
import { HeaderContainerDiv, AppNameDiv } from "./styles";

const Header = (props: IHeaderProps) => {
  return (
    <>
      <HeaderContainerDiv>
        <AppNameDiv>The Movie Review App</AppNameDiv>
        <Avatar width={45} height={45}>
          RP
        </Avatar>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
