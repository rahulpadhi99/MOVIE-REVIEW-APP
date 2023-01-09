import Avatar from "../Avatar";
import IHeaderProps from "./Header";
import { HeaderContainerDiv } from "./styles";

const Header = (props: IHeaderProps) => {
  return (
    <>
      <HeaderContainerDiv>
        <div>The Movie Review App</div>
        <Avatar width={45} height={45}>
          RP
        </Avatar>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
