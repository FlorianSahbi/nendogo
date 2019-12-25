import React, { useState } from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import InteractionButton from "../buttons/interaction/index";
import default_nendoroid from "../../images/default_nendoroid.jpg";

export default function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [isWished, setIsWished] = useState(props.isWished);
  const [isOwned, setIsOwned] = useState(props.isOwned);

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
        <InteractionButton
          type="LIKE"
          enabled="❤️"
          disabled="♡"
          isActive={false}
        />

        <InteractionButton
          type="WISH"
          enabled="★"
          disabled="☆"
          isActive={true}
        />

        <InteractionButton
          type="OWN"
          enabled="✓"
          disabled="X"
          isActive={false}
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
