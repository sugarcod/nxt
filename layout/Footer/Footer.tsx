import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.sass";
import cn from 'classnames';
import {format} from 'date-fns'

export const Footer = ({ className,...props }: FooterProps) => {
  return <footer className={cn(className, styles.footer)} {...props}>
   <div className={styles.copyright}><span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span></div>
     <a href="#">Пользовательское соглашение</a>
     <a href="#">Политика конфиденциальности</a>
  </footer>;
};
