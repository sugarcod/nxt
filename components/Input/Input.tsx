import { InputProps } from "./Input.props";
import styles from './Input.module.sass';
import cn from 'classnames';


export const Input = ({children,  className, ...props}: InputProps) => {
  return (
    <input className={cn(className, styles.input)} {...props}/>
  );
};