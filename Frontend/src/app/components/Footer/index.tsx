import IFooterProps from "./Footer";
import { FooterContainerDiv } from "./styles";

const Footer = (props: IFooterProps) => {
  return (
    <FooterContainerDiv className="footer-container">
      Made in India by RAHUL PADHI
    </FooterContainerDiv>
  );
};

export default Footer;
