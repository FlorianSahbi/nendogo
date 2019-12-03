import React, { useState } from "react"
import { Link } from "gatsby"
import cardStyles from "./card.module.css"

const Card = (props) => {

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

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false)
    } else {
      setIsLiked(true)
    }
  }

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      className={isHovered ? `${cardStyles.container} ${cardStyles.hover}` : `${cardStyles.container} ${cardStyles.default}`}
    >
      <img src={props.images[0]} alt="img_nendo" />
      <div className={cardStyles.wrapper}>
        <div className={cardStyles.likeButton} onClick={() => handleLike()}>
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