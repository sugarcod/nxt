import { ProductProps } from "./Product.props";
import styles from './Product.module.sass';
import cn from 'classnames';


export const Product = ({product, className, ...props}: ProductProps) => {
  console.log(product, 'product');
  console.log(process.env.NEXT_PUBLIC_DOMAIN, 'dom');
  
  
  return (
    <div className={cn(className, styles.product)}>
        <div className={styles.info}>
          <div><img src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`} alt="" /></div>
          <div></div>
          <div>
            <div>
              <span>{product.title}</span>
              <span>{product.categories}</span>
            </div>
          </div>
          <div>
            <span>{product.price}</span>
            <span>price</span>
          </div>
          <div></div>
          <div>
          <span>{product.credit}</span>
            <span>credit</span>
          </div>
          <div></div>
          <div>
          <span>{product.initialRating}</span>
            <span>rating</span>
          </div>
        </div>
        <div className={styles.text}>

          <div>
            {product.description}
          </div>
          <div>
              <div>
                {product.characteristics.map(elem => {
                  return <div>
                    <span>{elem.name}</span>
                    <span>{elem.value}</span>
                  </div>
                  
                })}
              </div>

              <div>
                
              </div>

          </div>
          

        </div>
        <div className={styles.buttons}></div>
    </div>
  )
};