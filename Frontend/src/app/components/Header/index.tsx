import AvatarComponent from "../Avatar";
import IHeaderProps from "./Header";
import { HeaderContainerDiv } from "./styles";

const Header = (props: IHeaderProps) => {
  return (
    <>
      <HeaderContainerDiv>
        <div>The Movie Review App</div>
        <AvatarComponent width={45} height={45}>
          RP
        </AvatarComponent>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
