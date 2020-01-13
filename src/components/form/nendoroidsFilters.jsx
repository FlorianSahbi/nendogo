import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "./input/text";
import * as Yup from "yup";

const NendoroidsFiltersForm = props => {
  return (
    <>
      <Formik
        initialValues={{
          filter: "",
          min: 0,
          max: 100
        }}
        validationSchema={Yup.object({
          filter: Yup.string().min(3, "Must be at least 3 characters or less"),
          min: Yup.number(),
          max: Yup.number()
        })}
        onSubmit={values => {
          props.filter(values);
        }}
      >
        <Form>
          <MyTextInput name="filter" type="text" placeholder="Filter" />
          <MyTextInput name="min" type="number" placeholder="Min" />
          <MyTextInput name="max" type="number" placeholder="Max" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default NendoroidsFiltersForm;
