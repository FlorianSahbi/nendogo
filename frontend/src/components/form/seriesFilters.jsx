import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "./input/text";
import * as Yup from "yup";

const SeriesFiltersForm = props => {
  return (
    <Formik
      initialValues={{
        filter: ""
      }}
      validationSchema={Yup.object({
        filter: Yup.string()
      })}
      onSubmit={values => {
        props.filter(values);
      }}
    >
      <Form>
        <MyTextInput name="filter" type="text" placeholder="Filter" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default SeriesFiltersForm;
