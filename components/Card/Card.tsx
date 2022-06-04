import { CardProps } from "./Card.props";
import styles from './Card.module.sass';
import cn from 'classnames';


export const Card = ({children, color='white', className, ...props}: CardProps) => {
  return (
    <div className={cn(styles.card, className, {
      [styles.blue]: color == 'blue'
    })}
    {...props}>
      {children}
    </div>
  );
};