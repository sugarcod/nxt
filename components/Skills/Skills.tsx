import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';
import { SkillsProps } from './Skills.props';
import styles from './Skills.module.sass';

export const Skills = ({tags}: SkillsProps) => {
  return (
    <div className={styles.wrapper}>
        <Htag tag='h2'>Получаемые навыки</Htag>
        <div className={styles.skill} >
          {tags.map(tag => (
            <Tag key={tag} size='s' color='primary'>{tag}</Tag>
          ))}
        </div>
    </div>
  )
}