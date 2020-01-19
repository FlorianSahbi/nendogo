import React, { useState } from "react";
import Layout from "../components/layout/index";
import { useQuery } from "@apollo/react-hooks";
import { GET_IMAGES } from "../apollo/queries/index";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";

const nendos = [
  {
    formattedName: "Caster/Merlin: Magus of Flowers Ver.",
    number: 970,
    id: "5e14ef67d69c7f0d81927b7f",
    images: [
      "https://images.goodsmile.info/cgm/images/product/20191220/9125/66325/large/2aef16ee876735a4e36dee4d39ac4dc7.jpg"
    ],
    interactions: []
  },
  {
    formattedName: "Caster/Merlin: Magus of Flowers Ver.",
    number: 970,
    id: "5e14ef67d69c7f0d81927b7f",
    images: [
      "https://images.goodsmile.info/cgm/images/product/20191220/9125/66325/large/2aef16ee876735a4e36dee4d39ac4dc7.jpg"
    ],
    interactions: []
  }
];
const now = new Date();

const Cards = ({ url, title, user, views }) => {
  const theme = useTheme();
  const [isHover, setIsHover] = useState(false);
  return (
    <Card
      style={{
        background: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        borderRadius: "0px"
      }}
    >
      <CardActionArea>
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <CardMedia
          image={url}
          src={url}
          title={title}
          style={{ height: "300px" }}
        />
        <CardContent></CardContent>
      </CardActionArea>
      <CardActions>
        <Typography gutterBottom variant="h6" component="h2">
          <Avatar alt="Remy Sharp" src={user.avatar} />
        </Typography>
        <Typography gutterBottom variant="span" component="h2">
          {user.pseudo} {moment("2020-01-14T06:02:02.630+00:00").fromNow()}
        </Typography>
      </CardActions>
      <CardActions>
        <VisibilityRoundedIcon style={{ marginRight: "0.5em" }} />
        <span style={{ color: "white" }}>
          {new Intl.NumberFormat("en-EN").format(views)}
        </span>
      </CardActions>
      <CardActions>
        <AvatarGroup>
          {nendos.map(n => {
            return <Avatar alt="Remy Sharp" src={n.images[0]} />;
          })}
          <Tooltip title="Foo • Bar • Baz">
            <Avatar>+3</Avatar>
          </Tooltip>
        </AvatarGroup>
      </CardActions>
    </Card>
  );
};

const renderCards = cards => {
  return cards.map(i => {
    return (
      <Grid item xl={2} lg={2} md={3} sm={3} sm={4} xs={6}>
        <Cards url={i.url} title={i.title} user={i.user} views={i.views} />
      </Grid>
    );
  });
};

const ImagesPage = () => {
  const theme = useTheme();
  const [images, setimages] = useState(null);

  console.log(images);
  const { error, loading, data } = useQuery(GET_IMAGES, {
    onCompleted: data => setimages(data.getImages.images),
    onError: error => console.log(error)
  });

  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Layout header>
      <Grid container style={{ padding: theme.spacing(1) }} spacing={1}>
        {loading && <div>Loading...</div>}
        {!loading && images && renderCards(images)}
      </Grid>
    </Layout>
  );
};

export default ImagesPage;
