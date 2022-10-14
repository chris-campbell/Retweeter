import NavbarComponent from "./Navbar";
import Footer from "./Footer/Footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
