/*eslint-disable jsx-a11y/click-events-have-key-events*/
/*eslint-disable jsx-a11y/no-static-element-interactions*/
/*eslint-disable jsx-a11y/interactive-supports-focus*/

import React, { useState } from "react"
import { Link } from "gatsby"
import cardStyles from "./card.module.css"
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';

let currentUser = null;
if (localStorage.getItem("user")) {
  currentUser = JSON.parse(localStorage.getItem("user"))
  console.log(currentUser)
}

const Card = (props) => {

  const CREATE_INTERACTION_MUTATION = gql`
  mutation CreateInteraction($nendoroidId: ID!, $userId: ID!, $type: InteractionType!){
    createInteraction(nendoroidId: $nendoroidId , userId: $userId, type: $type) {
      id
    }
  }
  `;

  const DELETE_INTERACTION_MUTATION = gql`
  mutation DeleteInteraction($interaction: ID!){
    deleteInteraction(interaction: $interaction) {
      id
    }
  }
  `;

  /*eslint-disable no-unused-vars*/
  const [createInteraction, { data: addLikeResponse }] = useMutation(CREATE_INTERACTION_MUTATION);
  const [deleteInteraction, { data: removelikeResponse }] = useMutation(DELETE_INTERACTION_MUTATION);

  const [isHovered, setIsHovered] = useState(false);

  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [isWished, setIsWished] = useState(props.isWished);
  const [isOwned, setIsOwned] = useState(props.isOwned);



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
    !isLiked ? createInteraction({ variables: { "nendoroidId": id.toString(), "userId": `${currentUser.id}`, "type": "LIKE" } })
      : deleteInteraction({ variables: { "interactionId": id.toString() } });
  };

  const handleWish = (id) => {
    isWished ? setIsWished(false) : setIsWished(true);
    !isWished ? createInteraction({ variables: { "nendoroidId": id.toString(), "userId": `${currentUser.id}`, "type": "WISH" } })
      : deleteInteraction({ variables: { "interactionId": id.toString() } });
  };

  const handleOwn = (id) => {
    isOwned ? setIsOwned(false) : setIsOwned(true);
    !isOwned ? createInteraction({ variables: { "nendoroidId": id.toString(), "userId": `${currentUser.id}`, "type": "OWN" } })
      : deleteInteraction({ variables: { "interactionId": id.toString() } });
  };

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave(e)}
      className={isHovered ? `${cardStyles.container} ${cardStyles.hover}` : `${cardStyles.container} ${cardStyles.default}`}
    >
      {props.images ?
        <img src={props.images[0]} alt="img_nendo" /> : <img src="https://d3ieicw58ybon5.cloudfront.net/exq/65/550.800/shop/product/150aa9d9939a4f249467f50fb1021ff6.jpg" alt="img_nendo" />
      }
      <div className={cardStyles.wrapper}>

        {props.isLiked !== null &&
          <div
            className={cardStyles.likeButton}
            onClick={() => handleLike(props.id)}
          >
            {isLiked ? "❤️" : "♡"}
          </div>
        }

        {props.isWished !== null &&

          <div
            className={cardStyles.wishButton}
            onClick={() => handleWish(props.id)}
          >
            {isWished ? "★" : "☆"}
          </div>
        }

        {props.isOwn !== null &&
          <div
            className={cardStyles.ownButton}
            role="button"
            onClick={() => handleOwn(props.id)}
          >
            {isOwned ? "✓" : "X"}
          </div>
        }

        <h2 className={cardStyles.title}>{props.name}</h2>
        <p className={cardStyles.number}>{props.number}</p>
        <div className={`${cardStyles.link} ${cardStyles.default}`}>
          <Link to={`/${props.name}/`} >Details</Link>
        </div>
      </div>
    </div >
  )
}

export default Card;