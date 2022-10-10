import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.sass";
import Star from "./star.svg";
import { useEffect, useState } from "react";
import cn from "classnames";
import { v4 } from 'uuid';

export const Rating = ({isEditable, rating, setRating, className, ...props}:RatingProps ) => {
  const [starIndex, setStarIndex] = useState<number>(rating)
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
  const [isHovering, setIsHovering] = useState(false);
  console.log("🚀 ~ file: Rating.tsx ~ line 12 ~ Rating ~ isHovering", isHovering)

  useEffect(()=>{
    fillStars()
  }, [starIndex, isHovering])


  let editArray: JSX.Element[] = []

  const fillStars = () => {
    if(isEditable){
      ratingArray.map((star, index) => {
        editArray.push(
          <Star
          onMouseEnter={()=>{setIsHovering(true)}}
          onMouseLeave={()=>{setIsHovering(false)}}
          className={isHovering ? `${styles.filled}` : ''}
          onClick={()=>{setStarIndex(index)}}
          />
        )
        })
        setRatingArray(editArray)
    }

    if(starIndex > 0){
      const arrayCreator = ratingArray.map((star, index) => {
        if(starIndex > index){
          return <Star className={styles.filled}/>
        } else {
          return <Star />
        }
      })
      setRatingArray(arrayCreator)

    }
}
  
  
  
  return <div className="12">
    {ratingArray.map(s => s)}
  </div>
}