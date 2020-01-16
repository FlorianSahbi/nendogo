import React, { useState } from "react";
import classes from "./style.module.css";
import InteractionButton from "../../button/interaction/index";
import default_nendoroid from "../../../images/default_nendoroid.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Skeleton from "@material-ui/lab/Skeleton";

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

  if (false) {
    return (
      <div className={`${classes.container} ${classes.default}`}>
        <div className={classes.wrapper}>
          <Skeleton variant="rect" />
        </div>
      </div>
    );
  }

  const isFalse = true;

  if (isFalse) {
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
          <img
            onLoad={() => props.isLoaded()}
            src={props.images[0]}
            alt="img_nendo"
          />
        ) : (
          <img
            onLoad={() => props.isLoaded()}
            src={default_nendoroid}
            alt="img_nendo"
          />
        )}

        <div className={classes.wrapper}>
          {props.isLiked !== undefined && (
            <div className={classes.likeButtonContainer}>
              <InteractionButton
                srcId={props.id}
                type="LIKE"
                enabled={<AiFillHeart />}
                disabled={<AiOutlineHeart />}
                isActive={props.isLiked}
              />
            </div>
          )}

          {props.isWished !== undefined && (
            <InteractionButton
              srcId={props.id}
              type="WISH"
              enabled="★"
              disabled="☆"
              isActive={props.isWished}
            />
          )}

          {props.isOwned !== undefined && (
            <InteractionButton
              srcId={props.id}
              type="OWN"
              enabled="✓"
              disabled="X"
              isActive={props.isOwned}
            />
          )}

          <h2 className={classes.title}>{props.name}</h2>

          <p className={classes.number}>{props.number}</p>

          <div className={`${classes.link} ${classes.default}`}>
            <a href={`../../nendoroid/${props.name.trim().toLowerCase().replace(/ /g, "-").replace(":","").replace("&","and").replace("(","").replace(")","").replace(".","")}/`}>Details</a>
          </div>
        </div>
      </div>
    );
  }
}
