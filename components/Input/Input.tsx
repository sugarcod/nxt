import { InputProps } from "./Input.props";
import styles from './Input.module.sass';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";


export const Input = forwardRef(({children,  className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input className={cn(className, styles.input)} ref={ref} {...props}/>
  );
});