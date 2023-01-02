import IFooterProps from "./Footer";
import { FooterContainerDiv } from "./styles";

const Footer = (props: IFooterProps) => {
  return (
    <>
      <FooterContainerDiv className="footer-container">
        <div>About</div>
        <div>Copyright@2023</div>
      </FooterContainerDiv>
    </>
  );
};

export default Footer;
