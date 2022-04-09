import { PTagProps } from "./PTag.props";
import styles from './PTag.module.sass';
import cn from 'classnames';


export const PTag = ({children, size='m', className, ...props}: PTagProps) => {
  return (
    <p className={cn(styles.p, {
      [styles.s]: size == 's',
      [styles.m]: size == 'm',
      [styles.l]: size == 'l',
    })}
    {...props}
    >
    {children}
    </p>
  );
};