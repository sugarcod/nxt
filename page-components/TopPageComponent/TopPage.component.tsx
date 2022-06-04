import { HhData, Htag, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponents.module.sass';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
  
  return (
    <div className={styles.wrapper}>
       <div className={styles.title}>
         <Htag tag="h1">{page.title}</Htag>
         {products && <Tag size="m" color="grey">{products.length}</Tag>}
         <span>Sorting</span>
       </div>

       <div>
       {products && products.map(prod => (<div key={prod._id}>{prod.title}</div>))}
       </div>

       <div className={styles.hhTitle}>
          <Htag tag="h2">Вакансии - {page.category}</Htag>
          <Tag size="m" color="red">hh.ru</Tag>
       </div>
     {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}  


    </div>
  );
};