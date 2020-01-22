import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContent: {
    height: "100%",
    backdropFilter: "0",
    opacity: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "all 0.5s ease",
    "&:hover": {
      backdropFilter: `brightness(70%) blur(5px)`,
      opacity: "1"
    }
  }
});

export default function Cards({ avatar, pseudo }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <a href={`../../user/${pseudo}/`}>
      <Card
        style={{
          background: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          borderRadius: "0px"
        }}
      >
        <CardActionArea>
          <CardMedia
            align-items="center"
            image={avatar}
            src={avatar}
            style={{
              height: "400px"
            }}
            title={name}
          >
            <CardContent className={classes.cardContent}>
              <Typography align="center" variant="h6" component="h1">
                {pseudo}
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
    </a>
  );
}
