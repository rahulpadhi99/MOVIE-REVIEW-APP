import "./Header.scss";
import IHeaderProps from "./Header";

const Header = (props: IHeaderProps) => {
  return (
    <>
      <div className="header-container">
        <div className="app-name-component">
          <div>The Movie Review App</div>
        </div>
        <div className="avatar-component">RP</div>
      </div>
    </>
  );
};

export default Header;
