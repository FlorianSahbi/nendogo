import React, { useState } from "react"
import { Link } from "gatsby"
import cardStyles from "./card.module.css"
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';



const Card = (props) => {

  const APOLLO_ADD_LIKE_MUTATION = gql`
    mutation addLike($id: ID!, $userId: ID!)  {
      addLikeToNendoroid(id: $id userId: $userId)
    }
  `
  const [addLike, { data }] = useMutation(APOLLO_ADD_LIKE_MUTATION);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(props.isLiked);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setIsHovered(true)
  }

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false)
  }


  const handleLike = (id) => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
    console.log(id)
    addLike({ variables: { "id": id, "userId": "5de97b1a3f1a7e37cc89520f" } })
      .then(value => console.log(`ok ${data}`))
      .catch(error => console.log(error));
  };

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      className={isHovered ? `${cardStyles.container} ${cardStyles.hover}` : `${cardStyles.container} ${cardStyles.default}`}
    >
      <img src={props.images[0]} alt="img_nendo" />
      <div className={cardStyles.wrapper}>
        <div
          className={cardStyles.likeButton}
          onClick={() => handleLike(props.id)}
        >
          {isLiked ? "❤️" : "♡"}
        </div>
        <h2 className={cardStyles.title}>{props.name}</h2>
        <p className={cardStyles.number}>{props.number}</p>
        <div className={`${cardStyles.link} ${cardStyles.default}`}>
          <Link to={`/${props.number}/`} >Details</Link>
        </div>
      </div>
    </div >
  )
}

export default Card;