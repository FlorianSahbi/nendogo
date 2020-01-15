import React, { useState } from "react";
import Layout from "../components/layout/index";
import Gallery from "react-photo-gallery";
import { useQuery } from "@apollo/react-hooks";
import { GET_IMAGES } from "../apollo/queries/index";
import classes from "./images.module.css";

import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

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

const Card = ({ url, title, user, views }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${classes.card}`}
    >
      <img src={url} alt="g" />

      {/* List of nendos */}
      <div className={`${classes.avagroup} ${isHover ? "" : classes.hid}`}>
        <AvatarGroup className={classes.abg}>
          {nendos.map(n => {
            return (
              <Avatar
                className={classes.avatarg}
                alt="Remy Sharp"
                src={n.images[0]}
              />
            );
          })}
          <Tooltip title="Foo • Bar • Baz">
            <Avatar className={classes.avatarg}>+3</Avatar>
          </Tooltip>
        </AvatarGroup>
      </div>

      {/* Counter */}
      <div className={`${classes.viewCount} ${isHover ? "" : classes.hid}`}>
        <VisibilityRoundedIcon style={{ marginRight: "0.5em" }} />
        <span style={{ color: "white" }}>
          {new Intl.NumberFormat("en-EN").format(views)}
        </span>
      </div>

      {/* Title */}
      <div className={`${classes.title} ${isHover ? "" : classes.hid}`}>
        <h2 style={{ color: "white" }}>{title}</h2>
      </div>

      {/* Uploader info */}
      <div className={`${classes.a} ${isHover ? "" : classes.hid}`}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={user.avatar} />
        <span style={{ color: "white" }}>
          {user.pseudo} {moment("2020-01-14T06:02:02.630+00:00").fromNow()}
        </span>
      </div>
    </div>
  );
};

const ImagesPage = () => {
  const [images, setimages] = useState(null);

  console.log(images);
  const { error, loading, data } = useQuery(GET_IMAGES, {
    onCompleted: data => setimages(data.getImages.images),
    onError: error => console.log(error)
  });

  if (error) return <div>{error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Layout header footer>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className={classes.grid}>
          {images &&
            images.map(i => (
              <Card url={i.url} title={i.title} user={i.user} views={i.views} />
            ))}
        </div>
      )}
    </Layout>
  );
};

export default ImagesPage;
