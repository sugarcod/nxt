import { RatingZProps } from "./RatingS.props.ts";
import styles from "./RatingS.module.sass";
import cn from "classnames";
import JSXStyle from "styled-jsx/style";
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import StarIcon from "./star.svg";
import { v4 } from "uuid";

export const RatingS = forwardRef(({
  isEditable = false,
  rating,
  error,
  setRating,
  className,
  ...props
}: RatingZProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

  console.log(error,'rules');
  
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    console.log("click");
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space" || setRating) {
      return;
    }
    setRating(i);
  };

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => {
            onClick(i + 1);
          }}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1)
            }
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  return (
    <div  className={cn({
      [styles.error]: error
    })}>
    <div ref={ref} {...props} >
      {ratingArray.map((r, i) => (
        <span key={v4()}> {r}</span>
      ))}
    </div>
    {error && <span className={styles.errorMess}>{error.message}</span>}
    </div>
    
  );
});
