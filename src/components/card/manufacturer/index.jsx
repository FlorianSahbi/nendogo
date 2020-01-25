import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { TEST_MANU } from "../../../apollo/queries/index";
import { useQuery } from "@apollo/react-hooks";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  containerCardManufacturer: {
    borderRadius: "10px",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    transition: "all 0.5s ease",
    "&:hover": {
      border: `2px solid ${theme.palette.secondary.light}`
    }
  },
  avatar: {
    height: "4em",
    width: "4em",
    background: "transparent",
    border: `2px solid ${theme.palette.primary.contrastText}`
  },
  link: {
    textDecoration: "none"
  }
}));

const Card = ({ name }) => {
  const classes = useStyles();
  const { error, loading, data } = useQuery(TEST_MANU, {
    fetchPolicy: "no-cache",
    variables: { name },
    onCompleted: data => console.log(data)
  });

  if (loading) return <CircularProgress />;

  return (
    <a href={`../manufacturer/${name}`}>
      <Grid
        className={classes.containerCardManufacturer}
        container
        direction="column"
        alignItems="center"
      >
        <Grid className={classes.cell} item style={{ padding: "0.5em" }}>
          <Typography variant="h6" align="center">
            {name}
          </Typography>
        </Grid>

        <Grid className={classes.cell} item style={{ padding: "0.5em" }}>
          <AvatarGroup className={classes.groupAvatar}>
            {data &&
              data.getNendoroidsByManufacturer.nendoroids.slice(0, 3).map(e => {
                return <Avatar className={classes.avatar} src={e.images[0]} />;
              })}
            {data.getNendoroidsByManufacturer.nendoroids.length > 3 && (
              <Tooltip title="Foo • Bar • Baz">
                <Avatar
                  className={classes.avatar}
                >{`+${data.getNendoroidsByManufacturer.nendoroids.length}`}</Avatar>
              </Tooltip>
            )}
          </AvatarGroup>
        </Grid>
      </Grid>
    </a>
  );
};

export default Card;
