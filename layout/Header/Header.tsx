import { HeaderProps } from "./Header.props";
import styles from "./header.module.sass";

export const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};
