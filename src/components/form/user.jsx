import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "./input/text";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_USER } from "../../apollo/queries/index";
import Auth from "../../globalStates/useAuth";

const UserForm = () => {
  const auth = Auth.useContainer();
  const [updateUser] = useMutation(UPDATE_USER);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string(),
          lastName: Yup.string()
        })}
        onSubmit={({ lastName, firstName }, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            updateUser({
              variables: { id: auth.user.id, lastName, firstName }
            });
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="FirstName"
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <MyTextInput
            label="LastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <button type="submit">Change</button>
        </Form>
      </Formik>
    </>
  );
};

export default UserForm;
