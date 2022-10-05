import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.sass';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import ClosedIcon from './close.svg'



export const ReviewForm = ({productId, className, ...props}: ReviewFormProps) => {

  return (
    <>
    <div className={cn(styles.reviewForm, className)} {...props}>

      <Input placeholder="Name" />
      <Input placeholder="Review title" />
      <div className={styles.rating}>
        <span>Grade: </span>
        <Rating rating={0} />
      </div>
      <Textarea className={styles.textarea} placeholder="Review text" />
      <div className={styles.submit}>
        <Button appearance="primary">Send</Button>
        <span>* Before publication, the review will be pre-moderated and checked</span>
      </div>
      </div>

      <div className={styles.success}>
        <div className={styles.successTitle}> Your review send</div>
        <div >
          Your review will be publishing after checking
        </div>
        <ClosedIcon className={styles.close} />
      </div>

 
    </>
    
  );
};