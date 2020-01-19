import React from "react";
import classes from "./style.module.css";
import { useQuery } from "@apollo/react-hooks";
import { GET_INTERACTIONS_QUERY } from "../../apollo/queries/index";
import moment from "moment";
import Layout from "../../components/layout/index";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { slugify } from "../../utils/index";

const Nendoroid = ({ pageContext: { manufacturer, releaseDate, id, formattedName, title, description, name, series, category, price, sculptor, cooperation, specifications, srcUrl, images, number } }) => {
  const { loading, error, data } = useQuery(GET_INTERACTIONS_QUERY, {
    variables: { id }
  });

  if (error) return <span style={{ color: "white" }}>{error.message}</span>;

  return (
    <Layout header>

      <div className={classes.header}>
        <img src={images[0]} alt="ok" />
        <div className={classes.title}>
          <Typography variant="h1" className={classes.title}>{formattedName}</Typography>
        </div>
      </div>

      <Grid className={classes.cardinfo} container>

        {/* LEFT  COLUMN */}


        <Grid className={classes.column} item md={2} sm={12}>
          <Grid container direction="row" justify="space-between" alignItems="stretch" style={{ height: "100%", padding: "0.5em" }}>
            <Grid className={classes.cell} container direction="row" justify="center" alignItems="center">
              <Typography variant="h6" align="center" >
                <a href={`../../serie/${slugify(series)}`}>
                  {series}
                </a>
              </Typography>
            </Grid>
            <Grid className={classes.cell} container direction="row" justify="center" alignItems="center">
              <Typography variant="h6" align="center">
                {moment(releaseDate).format('YYYY/MM')}
              </Typography>
            </Grid>
            <Grid className={classes.cell} container direction="row" justify="center" alignItems="center">
              <Typography variant="h6" align="center">
                ¥{price}
              </Typography>
            </Grid>
            <Grid className={classes.cell} container direction="row" justify="center" alignItems="center">
              <Typography variant="h6" align="center">
                #{number}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* MID  COLUMN */}
        <Grid className={classes.column} item md={8} sm={12}>

          <Grid container direction="row" justify="space-between" alignItems="stretch" style={{ height: "100%", padding: "0.5em" }}>
            <Grid className={classes.cell} container direction="column" justify="center" alignItems="stretch" style={{ padding: "5em" }}>
              <Typography gutterBottom align="center" variant="h2">
                {title}
              </Typography>
              {description && description.map(p => {
                return (
                  <Typography align="center" variant="subtitle1">
                    {p}
                  </Typography>
                )
              })}
            </Grid>
            <Grid className={classes.cell} item>
              <Grid container direction="row" justify="space-between" alignItems="stretch" style={{ height: "100%", padding: "0.5em" }}>
                <Grid className={classes.usersMidBot} item sm={3}>
                  <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={images[1]} alt="ok" />
                </Grid>
                <Grid className={classes.usersMidBot} item sm={3}>
                  <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={images[2]} alt="ok" />
                </Grid>
                <Grid className={classes.usersMidBot} item sm={3}>
                  <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={images[3]} alt="ok" />
                </Grid>
                <Grid className={classes.usersMidBot} item sm={3}>
                  <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={images[4]} alt="ok" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        {/* RIGHT  COLUMN */}
        <Grid className={classes.column} item md={2} sm={12}>
          <Grid container direction="row" justify="space-between" alignItems="stretch" style={{ height: "100%", padding: "0.5em" }}>
            <Grid className={classes.cell} item>
              <Grid container direction="row" justify="stretch" alignItems="space-between" style={{height: "100%"}}>
                <Grid item md={12}>
                  <Typography variant="h6" align="left">They like it</Typography>
                </Grid>
                <Grid container direction="row" md={12} style={{ padding: "0.5em"}}>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png" alt="ok" />
                  <Avatar src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                </Grid>
                <Grid container justify="flex-end" alignItems="flex-end" md={12}>
                  <Typography variant="button" align="right">See more</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.cell} item>
              <Grid container direction="row" justify="stretch" alignItems="space-between" style={{height: "100%"}}>
                <Grid item md={12}>
                  <Typography variant="h6" align="left">They like it</Typography>
                </Grid>
                <Grid container direction="row" md={12} style={{ padding: "0.5em"}}>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png" alt="ok" />
                  <Avatar src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png" alt="ok" />
                  <Avatar src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                </Grid>
                <Grid container justify="flex-end" alignItems="flex-end" md={12}>
                  <Typography variant="button" align="right">See more</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.cell} item>
              <Grid container direction="row" justify="stretch" alignItems="space-between" style={{height: "100%"}} >
                <Grid item md={12}>
                  <Typography variant="h6" align="left">They like it</Typography>
                </Grid>
                <Grid container direction="row" md={12} style={{ padding: "0.5em"}}>
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png" alt="ok" />
                  <Avatar src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png" alt="ok" />
                  <Avatar src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg" alt="ok" />
                  <Avatar src="https://wallpapersite.com/images/pages/pic_w/19265.jpg" alt="ok" />
                </Grid>
                <Grid container justify="flex-end" alignItems="flex-end" md={12}>
                  <Typography variant="button" align="right">See more</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Layout>
  );
}

export default Nendoroid;
