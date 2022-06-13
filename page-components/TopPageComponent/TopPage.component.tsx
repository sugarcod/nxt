import { HhData, Htag, PTag, Skills, Tag } from "../../components";
import { Advantages } from "../../components/Advantages/Advantages";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponents.module.sass';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
console.log("🚀 ~ file: TopPage.component.tsx ~ line 7 ~ TopPageComponent ~ firstCategory", firstCategory)
console.log("🚀 ~ file: TopPage.component.tsx ~ line 7 ~ TopPageComponent ~ products", products)
console.log("🚀 ~ file: TopPage.component.tsx ~ line 7 ~ TopPageComponent ~ page", page)
  
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
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0  &&  <Advantages advantages={page.advantages}/>}  
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}></div>}
      {page.tags && <Skills tags={page.tags} />}
    </div>
  );
};