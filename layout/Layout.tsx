import { LayoutProps } from "./LayoutProps.props";
import styles from "./Layout.module.sass";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
