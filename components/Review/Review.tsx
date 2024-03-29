import { ReviewProps } from "./Review.props";
import styles from './Review.module.sass';
import cn from 'classnames';
import UserIcon from './user.svg';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import { RatingS } from "../RatingS/RatingS";



export const Review = ({review,  className, ...props}: ReviewProps) => {

  const {name, title, description, rating, createdAt} = review
  return (
    <div className={cn(styles.review, className)} {...props}>

      <UserIcon />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>

      <div className={styles.rating}>
        <RatingS rating={rating}  />
      </div>

      <div className={styles.description}>
        {description}
      </div>
    
    </div>
  );
};