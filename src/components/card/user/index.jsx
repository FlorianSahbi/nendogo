import React, { useState } from "react";
import classes from "./style.module.css";
import { Link } from "gatsby";
import default_user from "../../../images/default_user.jpg";

const Card = ({ name, images }) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(images[0] === null);

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
      {images[0] !== null ? (
        <img src={images[0]} alt="img_nendo" />
      ) : (
        <img src={default_user} alt="default_user" />
      )}

      <div className={classes.wrapper}>
        <h2 className={classes.title}>{name}</h2>

        <div className={`${classes.link} ${classes.default}`}>
          <a href={`../user/${name}/`}>Details</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
