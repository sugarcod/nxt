import { RatingZProps } from "./RatingZ.props.ts";
import styles from "./RatingZ.module.sass";
import cn from "classnames";
import JSXStyle from "styled-jsx/style";
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from "./star.svg";
import { v4 } from "uuid";

export const RatingZ = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingZProps): JSX.Element => {
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
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={v4()}> {r}</span>
      ))}
    </div>
  );
};
