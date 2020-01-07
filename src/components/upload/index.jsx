import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { filesQuery } from "../file/index";
import { useStaticQuery, graphql } from "gatsby";

import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";

import S3 from "react-aws-s3";

const config = {
  bucketName: "nendogo",
  dirName: "beelphiew",
  region: "eu-west-3",
  accessKeyId: "AKIAIQNA2XPZ2HWNDTIA",
  secretAccessKey: "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",
  s3Url: "https://nendogo.s3.eu-west-3.amazonaws.com/"
};

const ReactS3Client = new S3(config);

const newFileName = "test-file";

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

const Upload = () => {
  const {
    prisma: { nendoroids }
  } = useStaticQuery(graphql`
    {
      prisma {
        nendoroids(orderBy: name_ASC) {
          id
          images
          number
          formattedName
        }
      }
    }
  `);
  const [uploadFile] = useMutation(uploadFileMutation);

  const onDrop = useCallback(
    ([file]) => {
      uploadFile({ variables: { file } });
      ReactS3Client.uploadFile(file, newFileName)
        .then(data => {
          // console.log({ data, file });
          let object = {
            id: "msofjkeozjvnqpf",
            bucket: data.bucket,
            createdAt: new Date(),
            updatedAt: new Date(),
            likes: [],
            views: 19,
            user: { id: "gojkregoijer", pseudo: "Yulric", avatar: "url" },
            title: "My share",
            nendoroids: [
              {
                id: "pojgre",
                formattedName: "Nanachi",
                number: "bis",
                images: ["duonno"]
              }
            ],
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
          console.log(object);
        })
        .catch(err => console.error(err));
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section style={{ height: "100vh", background: "white" }}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <FormControl onSubmit={(e) => console.log(e)}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Autocomplete
          multiple
          id="tags-outlined"
          options={nendoroids}
          getOptionLabel={option => option.formattedName}
          filterSelectedOptions
          renderInput={params => {
            return (
              <TextField
                {...params}
                variant="outlined"
                label="Select nendoroid(s)"
                placeholder="Favorites"
                fullWidth
              />
            );
          }}
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </FormControl>
    </section>
  );
};

export default Upload;
