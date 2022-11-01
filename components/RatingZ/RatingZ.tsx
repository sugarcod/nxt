import { RatingZProps } from "./RatingZ.props.ts";
import styles from "./RatingZ.module.sass";
import cn from "classnames";
import JSXStyle from "styled-jsx/style";
import { useEffect, useState } from "react";
import StarIcon from "./star.svg";
import { v4 } from "uuid";

export const RatingZ = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingZProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [ratingArray]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating
          })}
        />
      );
    });

    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={v4()}> {r}</span>
      ))}
    </div>
  );
};
