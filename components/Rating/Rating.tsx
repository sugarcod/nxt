import { RatingProps } from "./Rating.props";
import styles from './Rating.module.sass';
import Star from './star.svg';
import { useState } from "react";
import cn from 'classnames';


export const Rating = ({rating, setRating, isEditable = false, ...props}: RatingProps) => {

  const [myRating, setMyRating] = useState(rating);
  const [currentRating, setCurentRating] = useState(0);
  

  const ratingSwop = [];
  const ratingEditable = [];
  for (let index = 0; index < 5; index++) {
      if(myRating > index){
        ratingSwop.push(<span key={index}><Star className={styles.filled}/></span>);
      } else {
        ratingSwop.push(<span key={index}><Star /></span>);
      }
  }


  return (

    <div {...props}>
      {!isEditable && ratingSwop}
      {isEditable && <div>
        <span ><Star /></span>
        <span ><Star /></span>
        <span ><Star /></span>
        <span ><Star /></span>
        <span ><Star /></span>

        </div>}
    </div>
  );
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