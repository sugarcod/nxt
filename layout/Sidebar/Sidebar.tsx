import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.sass";

export const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}> Sidebar </div>;
};
