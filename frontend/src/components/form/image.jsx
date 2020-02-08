import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "./input/text";
import * as Yup from "yup";

const ImageForm = props => {
  return (
    <Formik
      initialValues={{
        filename: ""
      }}
      validationSchema={Yup.object({
        filename: Yup.string()
      })}
      onSubmit={values => {
        props.filter(values);
      }}
    >
      <Form>
        <MyTextInput name="filename" type="text" placeholder="Filename" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ImageForm;
