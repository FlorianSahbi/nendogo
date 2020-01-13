import React from "react";
import Layout from "../components/layout/index";
import Gallery from "react-photo-gallery";

const images = [
  {
    src: "http://eskipaper.com/images/anime-wallpaper-8.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "http://www.leparisien.fr/resizer/Ekey4nVHfB657a0M9RiiTSIPYyw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WXK2TZGDJ7NAZXFKB2LCK6SW64.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://wallpapersite.com/images/pages/pic_w/19265.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://www.itl.cat/pngfile/big/93-931458_2019-anime-wallpaper-anime-wallpaper-background-anime.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://www.xtrafondos.com/wallpapers/resized/shinobu-kocho-de-kimetsu-no-yaiba-3717.jpg?s=large",
    width: 4,
    height: 3
  },
  {
    src: "https://hdqwalls.com/wallpapers/ahri-lol-j5.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Anime-wallpaper-1.png",
    width: 4,
    height: 3
  },
  {
    src: "http://eskipaper.com/images/anime-wallpaper-8.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2017/04/best-sites-to-find-free-anime-wallpapers.jpg?fit=584%2C329&ssl=1",
    width: 4,
    height: 3
  },
  {
    src:
      "https://mocah.org/uploads/posts/4500265-anime-anime-girls-spirited-away-studio-ghibli.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://www.itl.cat/pngfile/big/93-931458_2019-anime-wallpaper-anime-wallpaper-background-anime.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://www.ledojomanga.com/bdd_local/upload/images/Plunderer-visuel-officiel.jpg",
    width: 3,
    height: 4
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTGT7S3xlprCVt3JQHc1urq5L-Vtw0BKtXLKybE0mH9Z-Op8NA",
    width: 3,
    height: 4
  }
];

const ImagesPage = () => {
  return (
    <Layout header footer>
      <Gallery  onClick={() => console.log("e")} photos={images} />
    </Layout>
  );
};

export default ImagesPage;
