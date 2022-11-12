import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.sass";
import Star from "./star.svg";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import cn from "classnames";
import { v4 } from "uuid";

export const Rating = forwardRef(({
  isEditable,
  rating = 0,
  setRating,
  className,
  ...props
}: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [starIndex, setStarIndex] = useState<number>(rating);
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [itemIndex, setItemIndex] = useState<number>(0);
  console.log(starIndex, 'starIndex');

  useEffect(() => {
    fillStars();
  }, [starIndex, isHovering, itemIndex]);

  let editArray: JSX.Element[] = [];

  const fillStars = () => {
    if (isEditable) {
      ratingArray.map((star, index) => {
        editArray.push(
          <Star
            key={v4()}
            onMouseEnter={() => {
              setIsHovering(true);
              setItemIndex(index);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setItemIndex(0);
            }}
            className={
              isHovering && itemIndex >= index ? `${styles.filled}` : ""
            }
            onClick={() => {
              setStarIndex(index + 1);
            }}
          />
        );
      });
      setRatingArray(editArray);
    }

    if (starIndex > 0) {
      const arrayCreator = ratingArray.map((star, index) => {
        if (starIndex > index) {
          return <Star key={v4()} className={styles.filled} />;
        } else {
          return <Star key={v4()} />;
        }
      });
      setRatingArray(arrayCreator);
    }
  };

  return <div ref={ref} className={styles.rat}>{ratingArray.map((s) => <span>{s}</span>)}</div>;
});
