import "./Footer.scss";
import IFooterProps from "./Footer";

const Footer = (props: IFooterProps) => {
  return (
    <>
      <div className="footer-container">
        <div>About</div>
        <div>Copyright@2023</div>
      </div>
    </>
  );
};

export default Footer;
