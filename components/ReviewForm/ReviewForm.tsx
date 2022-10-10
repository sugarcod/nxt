import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.sass';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import ClosedIcon from './close.svg'
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";



export const ReviewForm = ({productId, className, ...props}: ReviewFormProps) => {
  const {register, control, handleSubmit} = useForm<IReviewForm>();
  const onSubmit = (data: IReviewForm) => {
   console.log(data, 'data');
   
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className={cn(styles.reviewForm, className)} {...props}>

      <Input {...register('name')} placeholder="Name" />
      <Input {...register('title')} placeholder="Review title" />
      <div className={styles.rating}>
        <span>Grade: </span>
        <div className={styles.rate}>
          <Controller 
          control={control}
          name="rating"
          render={(field)=>(
            <Rating isEditable  rating={field.value} setRating={field.onChange}/>
          )
          }
        />
       
        </div>
      </div>
      <Textarea  className={styles.textarea} placeholder="Review text" />
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

 
    </form>
    
  );
};