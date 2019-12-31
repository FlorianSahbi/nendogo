import React, { useState } from "react";
import classes from "./style.module.css";
import default_nendoroid from "../../../images/default_nendoroid.jpg";

const Card = props => {
  return (
    <div className={`${classes.container} ${classes.hover}`}>
      <img src={default_nendoroid} alt="img_nendo" />
      <div className={classes.wrapper}>
        <h2 className={classes.title}>{props.name}</h2>
      </div>
    </div>
  );
};

export default Card;
