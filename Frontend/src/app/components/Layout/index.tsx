import "./Layout.scss";
import ILayoutProps from "./Layout";
import Main from "../Main";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
