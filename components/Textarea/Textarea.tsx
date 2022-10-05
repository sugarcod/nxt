import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.sass';
import cn from 'classnames';
import { useEffect, useRef, useState } from "react";


export const Textarea = ({children,  className, ...props}: TextareaProps) => {
  const [value, setValue] = useState<string>('')
  const [style, setStyle] = useState<string>('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(()=>{
    setStyle('0px');

  },)


  return (
    <textarea 
    className={cn(className, styles.textarea)} 
    {...props} 
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}
    ref={textAreaRef}
    style={{height: style}}
    />
  );
};