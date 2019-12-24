/*eslint-disable jsx-a11y/click-events-have-key-events*/
/*eslint-disable jsx-a11y/no-static-element-interactions*/
/*eslint-disable jsx-a11y/interactive-supports-focus*/

import React, { useState } from "react"
import { Link } from "gatsby"
import classes from "./card.module.css"
import { useMutation } from '@apollo/react-hooks';
import { CREATE_INTERACTION_MUTATION, DELETE_INTERACTION_MUTATION } from "../../apollo/queries/index"

let currentUser = null;
if (localStorage.getItem("user")) {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
}

export default function Card(props) {
  const [createInteraction] = useMutation(CREATE_INTERACTION_MUTATION);
  const [deleteInteraction] = useMutation(DELETE_INTERACTION_MUTATION);

  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [isWished, setIsWished] = useState(props.isWished);
  const [isOwned, setIsOwned] = useState(props.isOwned);

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setIsHovered(true)
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false)
  };

  const handleInteraction = (type) => {
    switch (type) {
      case "LIKE":
        isLiked ? setIsLiked(false) : setIsLiked(true);
        isLiked ?
          deleteInteraction({
            variables: {
              "interactionId": props.id.toString()
            }
          })
          :
          createInteraction({
            variables: {
              "nendoroidId": props.id.toString(),
              "userId": `${currentUser.id}`,
              "type": "LIKE"
            }
          })
        break;

      case "WISH":
        isWished ? setIsWished(false) : setIsWished(true);
        isWished ?
          deleteInteraction({
            variables: {
              "interactionId": props.id.toString()
            }
          })
          :
          createInteraction({
            variables: {
              "nendoroidId": props.id.toString(),
              "userId": `${currentUser.id}`,
              "type": "WISH"
            }
          })
        break;

      case "OWN":
        isOwned ? setIsOwned(false) : setIsOwned(true);
        isOwned ?
          deleteInteraction({
            variables:
              { "interactionId": props.id.toString() }
          })
          :
          createInteraction({
            variables: {
              "nendoroidId": props.id.toString(),
              "userId": `${currentUser.id}`,
              "type": "OWN"
            }
          })
        break;
    }
  };

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      className={isHovered ? `${classes.container} ${classes.hover}` : `${classes.container} ${classes.default}`}
    >
      {props.images ?
        <img src={props.images[0]} alt="img_nendo" /> : <img src="https://d3ieicw58ybon5.cloudfront.net/exq/65/550.800/shop/product/150aa9d9939a4f249467f50fb1021ff6.jpg" alt="img_nendo" />
      }
      <div className={classes.wrapper}>

        {isLiked !== null &&
          <div
            className={classes.likeButton}
            onClick={() => handleInteraction("LIKE")}
          >
            {isLiked ? "❤️" : "♡"}
          </div>
        }

        {isWished !== null &&
          <div
            className={classes.wishButton}
            onClick={() => handleInteraction("WISH")}
          >
            {isWished ? "★" : "☆"}
          </div>
        }

        {isOwned !== null &&
          <div
            className={classes.ownButton}
            role="button"
            onClick={() => handleInteraction("OWN")}
          >
            {isOwned ? "✓" : "X"}
          </div>
        }

        <h2 className={classes.title}>{props.name}</h2>
        <p className={classes.number}>{props.number}</p>
        <div className={`${classes.link} ${classes.default}`}>
          <Link to={`/${props.name}/`} >Details</Link>
        </div>
      </div>
    </div >
  )
}
