import { TextareaProps } from "./Textarea.props";
import styles from './Textarea.module.sass';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";

interface TextAreaChange {
  pix: number;
  change: boolean
}


export const Textarea = forwardRef(({children,  className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const [value, setValue] = useState<string>('')
  const [styl, setStyl] = useState<TextAreaChange>({pix: 80, change: false})
  //const refArea = useRef<HTMLTextAreaElement>(null);


  

  useEffect(()=>{
    
    if(styl.change){
      setStyl({pix: styl.pix+30, change: false})
    }
 
  },[value])

  return (
    <textarea 
    className={cn(className, styles.textarea)} 
    {...props} 
    value={value}
    onChange={(e)=>{
      if(e.target.scrollHeight > e.target.offsetHeight){
        setStyl({pix: styl.pix, change: true})
      }
      setValue(e.target.value)
    }}
    ref={ref}
    style={{height: `${styl.pix}px`}}
    />
  );
});