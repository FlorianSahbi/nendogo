/*eslint-disable jsx-a11y/click-events-have-key-events*/
/*eslint-disable jsx-a11y/no-static-element-interactions*/
/*eslint-disable jsx-a11y/interactive-supports-focus*/

import React, { useState } from "react"
import { Link } from "gatsby"
import cardStyles from "./card.module.css"
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';

const user = { email: "florian.sahbi@gmail.com" };

const Card = (props) => {

  const APOLLO_ADD_LIKE_MUTATION = gql`
    mutation addLike($id: ID!, $userId: String!)  {
      addLikeToNendoroid(id: $id userId: $userId)
    }
  `

  const APOLLO_REMOVE_LIKE_MUTATION = gql`
  mutation removeLike($id: ID!, $userId: String!)  {
    removeLikeToNendoroid(id: $id userId: $userId)
  }
  `

  const APOLLO_ADD_WISH_MUTATION = gql`
    mutation addWish($id: ID!, $userId: String!)  {
      addWishToNendoroid(id: $id userId: $userId)
    }
  `

  const APOLLO_REMOVE_WISH_MUTATION = gql`
  mutation removeWish($id: ID!, $userId: String!)  {
    removeWishToNendoroid(id: $id userId: $userId)
  }
  `

  const APOLLO_ADD_OWN_MUTATION = gql`
    mutation addOwn($id: ID!, $userId: String!)  {
      addOwnToNendoroid(id: $id userId: $userId)
    }
  `

  const APOLLO_REMOVE_OWN_MUTATION = gql`
  mutation removeOwn($id: ID!, $userId: String!)  {
    removeOwnToNendoroid(id: $id userId: $userId)
  }
  `
  /*eslint-disable no-unused-vars*/
  const [addLike, { data: addLikeResponse }] = useMutation(APOLLO_ADD_LIKE_MUTATION);
  const [removeLike, { data: removelikeResponse }] = useMutation(APOLLO_REMOVE_LIKE_MUTATION);

  /*eslint-disable no-unused-vars*/
  const [addWish, { data: addWishResponse }] = useMutation(APOLLO_ADD_WISH_MUTATION);
  const [removeWish, { data: removeWishResponse }] = useMutation(APOLLO_REMOVE_WISH_MUTATION);

  /*eslint-disable no-unused-vars*/
  const [addOwn, { data: addOwnResponse }] = useMutation(APOLLO_ADD_OWN_MUTATION);
  const [removeOwn, { data: removeOwnResponse }] = useMutation(APOLLO_REMOVE_OWN_MUTATION);

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
    isLiked ? removeLike({ variables: { "id": id.toString(), "userId": `${user.email}` } })
      : addLike({ variables: { "id": id.toString(), "userId": `${user.email}` } });
  };

  const handleWish = (id) => {
    isWished ? setIsWished(false) : setIsWished(true);
    isWished ? removeWish({ variables: { "id": id.toString(), "userId": `${user.email}` } })
      : addWish({ variables: { "id": id.toString(), "userId": `${user.email}` } });
  };

  const handleOwn = (id) => {
    isOwned ? setIsOwned(false) : setIsOwned(true);
    isOwned ? removeOwn({ variables: { "id": id.toString(), "userId": `${user.email}` } })
      : addOwn({ variables: { "id": id.toString(), "userId": `${user.email}` } });
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

        {props.isLiked &&
          <div
            className={cardStyles.likeButton}
            onClick={() => handleLike(props.id)}
          >
            {isLiked ? "❤️" : "♡"}
          </div>
        }

        {props.isLiked &&

          <div
            className={cardStyles.wishButton}
            onClick={() => handleWish(props.id)}
          >
            {isWished ? "★" : "☆"}
          </div>
        }

        {props.isOwn &&
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