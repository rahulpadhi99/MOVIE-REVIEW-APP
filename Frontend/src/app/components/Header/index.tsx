import IHeaderProps from "./Header";
import { HeaderContainerDiv } from "./styles";

const Header = (props: IHeaderProps) => {
  return (
    <>
      <HeaderContainerDiv>
        <div className="app-name-component">
          <div>The Movie Review App</div>
        </div>
        <div className="avatar-component">RP</div>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
