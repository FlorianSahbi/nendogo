import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../components/layout/index";
import { useDropzone } from "react-dropzone";
import classes from "./upload.module.css";
import Auth from "../../globalStates/useAuth";
import moment from "moment";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Tooltip from "@material-ui/core/Tooltip";

import ImageForm from "../../components/form/image";

import { AFTER_UPLOAD, S3_SIGN_MUTATION } from "../../apollo/queries/index";
import { useMutation } from "@apollo/react-hooks";
import axios from "axios";

const UploadPage = () => {
  // The current user
  let currentUser = Auth.useContainer();

  // Hooks
  const [filename, setFilename] = useState("Rikka wants to play some N64");
  const [file, setFile] = useState(null);

  console.log(filename)

  console.log(file)
  // Hooks graphql
  const [createImage] = useMutation(AFTER_UPLOAD, {
    onCompleted: data => console.log(data),
    onError: err => console.log(err)
  });

  const [signS3] = useMutation(S3_SIGN_MUTATION, {
    onCompleted: data => console.log(data),
    onError: error => console.log(error)
  });

  // Fake data
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
  const fakeName = "Rikka wants to play some N64";

  const onDrop = useCallback(([file]) => {
    setFile(Object.assign(file, { preview: URL.createObjectURL(file) }));
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop
  });

  const uploadToS3 = async (file, signedRequest) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };
    await axios.put(signedRequest, file, options);
  };

  const formatFilename = filename => {
    const date = moment().format("YYYYMMDD");
    const randomString = Math.random()
      .toString(36)
      .substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newFilename = `images/${date}-${randomString}-${cleanFileName}`;
    return newFilename.substring(0, 60);
  };

  const submit = async () => {
    console.log(file.name);
    const response = await signS3({
      variables: {
        filename: formatFilename(file.name),
        filetype: file.type
      }
    });

    console.log(response);

    const { signedRequest, url } = response.data.signS3;
    await uploadToS3(file, signedRequest);

    const graphqlResponse = await createImage({
      variables: {
        id: currentUser.user.id,
        title: filename,
        filename: formatFilename(file.name),
        url: url,
      }
    });

    console.log(`done`);
  };

  useEffect(
    () => () => {
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    },
    [file]
  );

  return (
    <Layout header>
      <section className={classes.container}>
        <button onClick={submit}>Submit</button>

        <div className={classes.dropzone} {...getRootProps()}>
          <input {...getInputProps()} />

          {/* {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )} */}

          {file && (
            <img
              style={{
                width: "100%",
                heigh: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }}
              src={file.preview}
              alt="ok"
            />
          )}

          {/* List of nendos */}
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

          {/* Counter */}
          <div className={classes.viewCount}>
            <VisibilityRoundedIcon style={{ marginRight: "0.5em" }} />
            <span style={{ color: "white" }}>
              {new Intl.NumberFormat("en-EN").format(counter)}
            </span>
          </div>

          {/* Title */}
          <div className={classes.title}>
            <h2 style={{ color: "white" }}>{filename}</h2>
          </div>

          {/* Uploader info */}
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
      <ImageForm
        filter={filter => {
          setFilename(filter.filename);
        }}
      />
    </Layout>
  );
};

export default UploadPage;
