import { useReducer } from "react";
import { HhData, Htag, PTag, Skills, Tag } from "../../components";
import { Advantages } from "../../components/Advantages/Advantages";
import { Sort } from "../../components/Sort/Sort";
import { SortEnum } from "../../components/Sort/Sort.props";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponents.module.sass';


interface SortAction {
  type: SortEnum;
}


const ratingReducer = (state:  ProductModel[] , action:SortAction ):ProductModel[]  => {
  const {type} = action
  switch (type) {
    case SortEnum.Rating:
      return state;
    case SortEnum.Price:
      return state
    default:
      return state;
  }
}



export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
console.log("🚀 ~ file: TopPage.component.tsx ~ line 10 ~ TopPageComponent ~ products", products)
const [rating, dispatchRating] = useReducer(ratingReducer, products);

  return (
    <div className={styles.wrapper}>
       <div className={styles.title}>
         <Htag tag="h1">{page.title}</Htag>
         {products && <Tag size="m" color="grey">{products.length}</Tag>}
         <Sort sort={SortEnum.Rating} setSort={function (sort: SortEnum): void {
          throw new Error("Function not implemented.");
        } }  />
       </div>

       <div>
       {products && products.map(prod => (<div className="mb-3" key={prod._id}>
        <Htag tag="h3">{prod.title}</Htag>
        <span>{prod.price}</span>
        </div>))}
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