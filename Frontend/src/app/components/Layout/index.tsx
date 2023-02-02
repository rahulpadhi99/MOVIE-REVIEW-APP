import Main from "../Main";
import ILayoutProps from "./Layout";
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
