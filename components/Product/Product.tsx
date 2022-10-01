import { ProductProps } from "./Product.props";
import styles from './Product.module.sass';
import cn from 'classnames';
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";


export const Product = ({product, className, ...props}: ProductProps) => {

  return (
    <Card className={cn(className, styles.product)}>
    
          <div className={styles.logo}><img src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`} alt="logo" /></div>
          <div className={styles.title}> <span> {product.title}</span></div>
          <div className={styles.price}> <span>{product.price}</span> </div>
         
          <div className={styles.credit}><span>{product.credit}</span> </div>
          
          <div className={styles.rating}><Rating rating={product.reviewAvg || product.initialRating}/></div>
          
          <div  className={styles.tag}>{product.categories.map( cat =><Tag key={cat} size={"s"} color={"ghost"}>{cat}</Tag> )}</div>
          <div className={styles.priceTitle}> <span>Price</span> </div>
          <div className={styles.creditTitle}> <span>Credit</span> </div>
          <div className={styles.rateTitle}> <span>{product.reviewCount}</span> <span>reviews</span></div>
          <div className={styles.hr}> <hr /></div>
          <div className={styles.descr}>{product.description}</div>
          <div className={styles.feature}>feature</div>
          <div className={styles.advs}>
            <div className={styles.advantages}>
              <h3>advantages</h3>
              {product.advantages}
            </div>

            <div className={styles.disadvantages}>
              <h3>disadvantages</h3>
              {product.disadvantages}
            </div>

          </div>
          < div className={styles.hr}> <hr /></div>
          <div className={styles.actions}>
            <Button appearance="primary">Look forward</Button>
            <Button appearance="ghost" arrow="right">Read reviews</Button>
          </div>
    </Card>
  )
};