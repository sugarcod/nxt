import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.sass';
import cn from 'classnames';
import { Input } from "../Input/Input";
import { RatingS } from "../RatingS/RatingS";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import ClosedIcon from './close.svg'
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewResponse } from "./ReviewForm.interface";
import { API } from "../../helpers/api";
import axios from "axios";
import { useState } from "react";



export const ReviewForm = ({productId, className, ...props}: ReviewFormProps) => {
  const {register, control, handleSubmit, formState: {errors}} = useForm<IReviewForm>();
  const{isSuccess, setIsSuccess} = useState<boolean>(false)

  const onSubmitFunc = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewResponse>(API.review.createDemo, {...formData, productId})
      if(data.message){
        setIsSuccess(true)
      } else {
        setIsSuccess(false)
      }
    } catch (error) {
      
    }
   
   
  
  
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFunc)}>
    <div className={cn(styles.reviewForm, className)} {...props}>

      <Input 
          {...register('name', {required: {value: true, message: 'Please enter name'}})}
          placeholder="Name"
          error={errors.name}
          />
      <Input 
          {...register('title', {required: {value: true, message: 'Please enter title'}})}
          placeholder="Review title"
          error={errors.title}
          />
      <div className={styles.rating}>
        <span>Grade: </span>
        <div className={styles.rate}>
          <Controller 
          control={control}
          name="rating"
          rules={{ required: {value: true, message: 'Please rate'} }}
          render={({field})=>{
            console.log(field, 'field')
            return<>
            <RatingS isEditable error={errors.rating}  rating={field.value} ref={field.ref} setRating={field.onChange}/>
            </> 
          }
          }
        />
       
        </div>
      </div>
      <Textarea 
      {...register('description', {required: {value: true, message: 'Description must be provided'}})}
      className={styles.textarea}
      placeholder="Review text"
      error={errors.description}
      />
      <div className={styles.submit}>
        <Button type="submit" appearance="primary">Send</Button>
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