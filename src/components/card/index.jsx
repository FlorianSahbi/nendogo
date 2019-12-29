import React, { useState } from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import InteractionButton from "../button/interaction/index";
import default_nendoroid from "../../images/default_nendoroid.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = e => {
    e.preventDefault();
    setIsHovered(true);
  };

  const onMouseLeave = e => {
    e.preventDefault();
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={e => handleMouseEnter(e)}
      onMouseLeave={e => onMouseLeave(e)}
      className={
        isHovered
          ? `${classes.container} ${classes.hover}`
          : `${classes.container} ${classes.default}`
      }
    >
      {props.images ? (
        <img src={props.images[0]} alt="img_nendo" />
      ) : (
        <img src={default_nendoroid} alt="img_nendo" />
      )}

      <div className={classes.wrapper}>
        <div className={classes.likeButtonContainer}>
          <InteractionButton
            srcId={props.id}
            type="LIKE"
            enabled={<AiFillHeart />}
            disabled={<AiOutlineHeart />}
            isActive={props.isLiked}
          />
        </div>

        <InteractionButton
          srcId={props.id}
          type="WISH"
          enabled="★"
          disabled="☆"
          isActive={props.isWished}
        />

        <InteractionButton
          srcId={props.id}
          type="OWN"
          enabled="✓"
          disabled="X"
          isActive={props.isOwned}
        />

        <h2 className={classes.title}>{props.name}</h2>

        <p className={classes.number}>{props.number}</p>

        <div className={`${classes.link} ${classes.default}`}>
          <Link to={`/${props.name}/`}>Details</Link>
        </div>
      </div>
    </div>
  );
}
