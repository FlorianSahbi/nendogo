import React from "react";
import classes from "./style.module.css";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";

const Card = ({ name }) => {
  return (
    <a href={`../serie/${name}`}>
      <div className={`${classes.containerCardSerie} ${classes.hover}`}>
        <div className={classes.wrapper}>
          <div className={classes.name}>
            <h2 className={classes.title}>{name}</h2>
          </div>

          <div className={classes.nendoroids}>
            <AvatarGroup>
              <Avatar
                alt="Remy Sharp"
                src="https://images.goodsmile.info/cgm/images/product/20160119/5464/37360/large/f0c776c5bba308ff80c02d0748b18037.jpg"
                className={classes.avatar}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://images.goodsmile.info/cgm/images/product/20161129/6099/42534/large/3c5d5568e7b4d214c3f6cc6f9c3cd816.jpg"
                className={classes.avatar}
              />
              <Avatar
                alt="Travis Howard"
                src="https://images.goodsmile.info/cgm/images/product/20160106/5440/37193/large/48f47e5ac929429cad2d5ce0fb31972b.jpg"
                className={classes.avatar}
              />
              <Avatar
                alt="Cindy Baker"
                src="https://images.goodsmile.info/cgm/images/product/20191031/8949/64919/large/001da45ea1aefa6f2abe13d2804e0996.jpg"
                className={classes.avatar}
              />
              <Tooltip title="Foo • Bar • Baz">
                <Avatar className={classes.avatar}>+3</Avatar>
              </Tooltip>
            </AvatarGroup>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
