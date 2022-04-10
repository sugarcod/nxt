import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.sass";
import Star from "./star.svg";
import { useState } from "react";
import cn from "classnames";

export const Rating = ({
  rating,
  setRating,
  isEditable = false,
  ...props
}: RatingProps) => {
  const [myRate, setMyRate] = useState(new Array(5).fill(<></>));
  const [tempRate, setTempRate] = useState(0);

  let operate = true;
  const rateArr = (rating: number): JSX.Element[] => {
    const rate = myRate.map((elem, index) => {
      if (isEditable) {
        return (
          <Star
            key={index}
            onMouseEnter={() => {
              console.log(index);
              setTempRate(index + 1);
              //rateArr(index + 1);
            }}
            onMouseLeave={() => {
              console.log(operate, "leave oerate");
              if (operate) setTempRate(0);
            }}
            onClick={() => {
              setRating(tempRate + 1);
              operate = false;
              console.log(operate, "click oerate");
            }}
            className={cn(styles.star, {
              [styles.filled]: tempRate > index
            })}
          />
        );
      } else {
        if (rating > index) {
          return <Star key={index} className={styles.filled} />;
        } else {
          return <Star key={index} />;
        }
      }
    });
    return rate;
  };

  return <div>{rateArr(rating)}</div>;
};

/*
import { RatingProps } from "./Rating.props";
import styles from './Rating.module.sass';
import Star from './star.svg';
import { useState } from "react";
import cn from 'classnames';


export const Rating = ({rating, setRating, isEditable = false, ...props}: RatingProps) => {

  const [myRating, setMyRating] = useState(new Array(5).fill(<></>));

  const  constructorRating = (rating: number):JSX.Element[] => {
    const updatedArr = myRating.map((elem, index) => {
      if(rating > index){
        return <Star className={styles.filled}/>;
      } else {
        return <Star/>;
      }
      
    });
    return updatedArr;
  };

  return <div {...props}>
    {constructorRating(4)}
  </div>;
};

*/
