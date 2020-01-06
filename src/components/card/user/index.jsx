import React, { useState } from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import default_nendoroid from "../../../images/default_nendoroid.jpg";

const Card = props => {
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
        <h2 className={classes.title}>{props.name}</h2>

        <div className={`${classes.link} ${classes.default}`}>
          <a href={`../user/${props.name}/`}>Details</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
