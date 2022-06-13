import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';
import { AdvantagesProps } from './Advanatges.props';
import styles from './Advantages.module.sass';
import CircleIcon from './circle.svg';

export const Advantages = ({advantages}: AdvantagesProps) => {
  return (
    <div className={styles.wrapper}>
        <Htag tag='h2'>Преимущества</Htag>

        <div className={styles.list}>
          {advantages.map(advantage => (
            <div key={advantage._id} className={styles.listItem}>
            <div className={styles.itemTitle}>
            <CircleIcon />
            <Htag tag='h3'>{advantage.title}</Htag>
            </div>
            <div className={styles.itemText}>
            <p>{advantage.description}</p>
            </div> 
          </div>
          ))}
        </div>

        <div className={styles.end}>
          <p>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</p>
        </div>

        {/* <Htag tag='h2'>Получаемые навыки</Htag>
        <div className={styles.skill} >
          {tags.map(tag => (
            <Tag size='s' color='primary'>{tag}</Tag>
          ))}
        </div> */}
    </div>
  )
}