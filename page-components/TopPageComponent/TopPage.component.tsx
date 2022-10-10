import { useEffect, useReducer } from "react";
import { HhData, Htag, Product, PTag, Skills, Tag } from "../../components";
import { Advantages } from "../../components/Advantages/Advantages";
import { Sort } from "../../components/Sort/Sort";
import { SortEnum } from "../../components/Sort/Sort.props";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponents.module.sass';
import { v4 } from 'uuid';


interface SortAction {
  type: SortEnum;
}

interface SortReducerState{
  sort: SortEnum;
  products: ProductModel[];
}


const ratingReducer = (state:  SortReducerState , action:SortAction ):SortReducerState  => {
  switch (action.type) {
    case SortEnum.Rating:
      return{
        sort: SortEnum.Rating,
        products: [...state.products.sort((a,b) => a.initialRating - b.initialRating )]
      } 
    case SortEnum.Price:
      return{
        sort: SortEnum.Price,
        products:[...state.products.sort((a,b) =>a.price - b.price)] 
      }
    case SortEnum.ChangePrice:
      return{
        sort: SortEnum.ChangePrice,
        products:[...state.products.sort((a,b) =>b.price - a.price) ]
      }
    case SortEnum.ChangeRating:
      return{
        sort: SortEnum.ChangeRating,
        products: [...state.products.sort((a,b) => a.initialRating - b.initialRating )].reverse() 
      }
    default:
      throw new Error('Not valid type of sort')
  }
}



export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
  const [{products: productSorted, sort: sortDispatch}, dispatchSort] = useReducer(ratingReducer, {products, sort: SortEnum.Rating});
  
  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort}, );
  }


  return (
    <div className={styles.wrapper}>
       <div className={styles.title}>
         <Htag tag="h1">{page.title}</Htag>
         {products && <Tag size="m" color="grey">{products.length}</Tag>}
         <Sort sort={sortDispatch} setSort={setSort}  />
       </div>

       <div>
       {productSorted && productSorted.map((prod:ProductModel , index: number) => (<Product product={prod} className="mb-3" key={v4()}/>))}
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