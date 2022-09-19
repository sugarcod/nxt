import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.sass";
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg';
import cn from 'classnames';
import { Search } from "../../components";

export const Sidebar = ({ className,...props }: SidebarProps) => {
  return <div className={cn(className, styles.sidebar)} {...props} > 
      <Logo className={styles.logo} />
      <div><Search /></div>
      <Menu />
  </div>;
};


