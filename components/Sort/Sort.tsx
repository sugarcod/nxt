import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.sass';
import SortIcon from './sort.svg';
import cn from 'classnames';

export const Sort = ({sort, setSort, className, ...props}: SortProps) => {
  console.log(sort, 'sort')
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button onClick = {()=> setSort(SortEnum.ChangeRating)}>↑	↓</button>
        <span
        onClick = {()=> setSort(SortEnum.Rating)}
        className={cn({
          [styles.active] : sort == SortEnum.Rating
        })}
        >
          
          <SortIcon className={styles.sortIcon} /> По рейтингу
        </span>
        <button  onClick = {()=> {
            console.log('sort with',SortEnum.ChangePrice  );
            
            setSort(SortEnum.ChangePrice)}}>↑ price	↓</button>
        <span
         onClick = {()=> setSort(SortEnum.Price)}
         className={cn({
           [styles.active] : sort == SortEnum.Price
         })}>
           
          <SortIcon className={styles.sortIcon} /> По цене
        </span>
    </div>
  )
}

