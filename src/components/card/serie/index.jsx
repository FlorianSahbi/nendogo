import React from "react";
import classes from "./style.module.css";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";

import { TEST } from "../../../apollo/queries/index";
import { useQuery } from "@apollo/react-hooks";

const Card = ({ name }) => {
  const { error, loading, data } = useQuery(TEST, {
    fetchPolicy: "no-cache",
    variables: { name },
    onCompleted: data => console.log(data)
  });

  if (loading) return <div>OK...</div>;
  return (
    <a href={`../serie/${name}`}>
      <div className={`${classes.containerCardSerie} ${classes.hover}`}>
        <div className={classes.wrapper}>
          <div className={classes.name}>
            <h2 className={classes.title}>{name}</h2>
          </div>

          <div className={classes.nendoroids}>
            <AvatarGroup className={classes.groupAvatar}>
              {data &&
                data.getNendoroidsBySerie.nendoroids.slice(0, 3).map(e => {
                  console.log(e);
                  return (
                    <a
                      className={classes.link}
                      href={`../../nendoroid/${e.formattedName}`}
                    >
                      <Avatar
                        className={classes.avatar}
                        alt="Remy Sharp"
                        src={e.images[0]}
                      />
                    </a>
                  );
                })}
              {data.getNendoroidsBySerie.nendoroids.length > 3 && (
                <Tooltip title="Foo • Bar • Baz">
                  <Avatar
                    className={classes.avatar}
                  >{`+${data.getNendoroidsBySerie.nendoroids.length}`}</Avatar>
                </Tooltip>
              )}
            </AvatarGroup>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
