import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.sass';
import cn from 'classnames';


export const Textarea = ({children,  className, ...props}: TextareaProps) => {
  return (
    <textarea className={cn(className, styles.textarea)} {...props}/>
  );
};