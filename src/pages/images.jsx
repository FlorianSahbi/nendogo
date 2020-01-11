import React from "react";
import classes from "./images.module.css";

const images = [
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png",
      cols: 2,
  },
  {
    img: "http://eskipaper.com/images/anime-wallpaper-8.jpg",
    cols: 1,
  },
  {
    img:
      "https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1",
      cols: 1,
  },
  {
    img:
      "https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg",
      cols: 3,
  },
  {
    img: "https://wallpapersite.com/images/pages/pic_w/19265.jpg",
    cols: 2,
  },
  {
    img:
      "https://www.itl.cat/pngfile/big/93-931458_2019-anime-wallpaper-anime-wallpaper-background-anime.jpg",
      cols: 2,
  },
  {
    img:
      "https://www.xtrafondos.com/wallpapers/resized/shinobu-kocho-de-kimetsu-no-yaiba-3717.jpg?s=large",
      cols: 3,
  },
  {
    img:
      "https://steamuserimages-a.akamaihd.net/ugc/777357228030313022/C7FFE68928D4E7A820F10B3FDEF3A32D6FE97657/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      cols: 1,
  },
  {
    img: "https://hdqwalls.com/wallpapers/ahri-lol-j5.jpg",
    cols: 1,
  }
];

const ImagesPage = () => {
  return (
    <div className={classes.grid}>
        {images.map(l => <img src={l.img} alt="r" />)}
    </div>
  );
};

export default ImagesPage;
