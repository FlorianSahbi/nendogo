import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";
import { slugify } from "../../../utils/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardContent: {
    height: "100%",
    backdropFilter: "0",
    opacity: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      backdropFilter: `brightness(70%) blur(5px)`,
      opacity: "1"
    }
  }
});

export default function Cards({ images, name, number }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <a href={`../../nendoroid/${slugify(name)}/`}>
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
            image={images[0]}
            src={images[0]}
            style={{
              height: "400px"
            }}
            title={name}
          >
            <CardContent className={classes.cardContent}>
              <Typography align="center" variant="h6" component="h1">
                {name}
              </Typography>
              <Typography align="center" variant="h6" component="h1">
                #{number}
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
    </a>
  );
}
