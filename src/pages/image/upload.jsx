import React, { useCallback } from "react";
import Layout from "../../components/layout/index";
import { useDropzone } from "react-dropzone";
import classes from "./upload.module.css";
import Auth from "../../globalStates/useAuth";
import moment from "moment";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";

const UploadPage = () => {
  let currentUser = Auth.useContainer();
  const onDrop = useCallback(([file]) => {
    let object = {
      id: "msofjkeozjvnqpf",
      bucket: data.bucket,
      createdAt: new Date(),
      updatedAt: new Date(),
      likes: [],
      views: 19,
      user: {},
      title: "My share",
      nendoroids: [],
      file: {
        id: "poijnbvfstfegyhujk",
        createdAt: new Date(),
        updatedAt: new Date(),
        filename: file.name,
        mimetype: file.type,
        encoding: "je sais pas",
        url: data.location
      }
    };
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
        "https://images.goodsmile.info/cgm/images/product/20191220/9125/66328/large/d0de1985ac9d54cc6a41f0a2bb2437f6.jpg"
      ],
      interactions: []
    }
  ];
  const now = new Date();
  let counter = 0;
  return (
    <Layout header>
      <section className={classes.container}>
        <div className={classes.dropzone} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}

          <div className={classes.avagroup}>
            <AvatarGroup>
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

          <div className={classes.viewCount}>
            <VisibilityRoundedIcon style={{ marginRight: "0.5em" }} />
            <span style={{ color: "white" }}>
              {new Intl.NumberFormat("en-EN").format(counter)}
            </span>
          </div>

          <div className={classes.title}>
            <h2 style={{ color: "white" }}>Rikka wants to play some N64</h2>
          </div>

          {currentUser.isAuth && (
            <div className={classes.a}>
              <Avatar
                className={classes.avatar}
                alt="Remy Sharp"
                src={currentUser.user.avatar}
              />
              <span style={{ color: "white" }}>
                {currentUser.user.pseudo}{" "}
                {moment()
                  .startOf(now)
                  .fromNow()}
              </span>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default UploadPage;
