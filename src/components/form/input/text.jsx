import React from "react";
import { useField } from "formik";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  input: {
    color: theme.palette.common.black,
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: "50px",
    padding: "0.5rem 0rem 0.5rem 1rem",
    outline: "none",
    "input[type='submit']": {
      color: "blue"
    } 
  },
  cell: {
    padding: "0.5rem",
    height: "90px"
  }
}));

const MyTextInput = ({ label, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  return (
    <>
      <Grid item className={classes.cell}>
        <label htmlFor={props.id || props.name}>
          <Typography color="primary" align="left">
            {label}
          </Typography>
        </label>
        <input className={classes.input} {...field} {...props} />
        {meta.touched && meta.error ? (
          <Typography color="error" align="center">
            {meta.error}
          </Typography>
        ) : null}
      </Grid>
    </>
  );
};

export default MyTextInput;
