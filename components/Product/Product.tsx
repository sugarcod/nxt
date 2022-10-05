import { ProductProps } from "./Product.props";
import styles from './Product.module.sass';
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { devlOfNum, priceRu } from "../../helpers/helpers";
import Image from 'next/image';
import React, { useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";


export const Product = ({product, className, ...props}: ProductProps) => {

  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  return (
    <>
    <Card className={cn(className, styles.product)}>
    
          <div className={styles.logo}>
            <Image  
            src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
            alt="logo"
            width="70"
            height="70"
            />
            </div>
          <div className={styles.title}> <span> {product.title}</span></div>
          <div className={styles.price}> 
            <span>{priceRu(product.price)}</span> 
            {product.oldPrice && <Tag color="green" size={"s"} className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
          </div>
         
          <div className={styles.credit}><span>{priceRu(product.credit)}/<span className={styles.month}>мес</span></span> </div>
          
          <div className={styles.rating}><Rating rating={product.reviewAvg || product.initialRating}/></div>
          
          <div  className={styles.tag}>{product.categories.map( cat =><Tag className={styles.cat} key={cat} size={"s"} color={"ghost"}>{cat}</Tag> )}</div>
          <div className={styles.priceTitle}> <span>Price</span> </div>
          <div className={styles.creditTitle}> <span>Credit</span> </div>
          <div className={styles.rateTitle}> <span>{product.reviewCount}</span> <span>{devlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'] )}</span></div>
          <div className={styles.hr}> <hr /></div>
          <div className={styles.descr}>{product.description}</div>
          <div className={styles.feature}>
            {product.characteristics.map( c=> (
              <div className={styles.chars} key={c.name}>
                <span className={styles.char}>{c.name}</span>
                <span className={styles.charDot}></span>
                <span className={styles.charValue}>{c.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.advs}>
          {product.advantages && <div className={styles.advantages}>
              <div className={styles.advTitle}>Advantages</div>
              {product.advantages}
            </div> }

            {product.disadvantages && <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Disadvantages</div>
              {product.disadvantages}
            </div> }

          </div>
          < div className={cn(styles.hr, styles.hr2)}> <hr /></div>
          <div className={styles.actions}>
            <Button appearance="primary" >Look forward</Button>
            <Button 
            appearance="ghost" 
            className={styles.reviewButton} 
            arrow={isReviewOpened ? "down" : "left" }
            onClick = {() => setIsReviewOpened(!isReviewOpened)}
            >Read reviews</Button>
          </div>
    </Card>

    <Card color="blue" className={cn(styles.review, {
        [styles.opened]: isReviewOpened,
        [styles.closed]: !isReviewOpened
      })
    }>

      {product.reviews.map(r => (
        <>
         <Review key={r._id} review={r} />
          <hr />
        </>
       
      ))}

      <ReviewForm productId={product._id} />

    </Card>

    </>

  )
}; 