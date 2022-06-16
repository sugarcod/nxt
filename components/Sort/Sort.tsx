import { SortProps } from './Sort.props';
import styles from './Sort.module.sass';
import SortIcon from './sort.svg';
import cn from 'classnames';

export const Sort = ({sort, setSort, className, ...props}: SortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
        <span>
          <SortIcon /> По рейтингу
        </span>
        <span>
          <SortIcon /> По цене
        </span>
    </div>
  )
}

