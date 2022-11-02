import React, { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";
import * as authActions from "../actions/auth";

import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const validationSchema = () => {
    return Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(6, "6 letter minimum"),
    });
  };

  const navigate = useNavigate();

  const onChangeAuthMode = () => {
    navigate("/signup");
  };

  return (
    <Fragment>
      <br />
      {props.submittingForm ? (
        <div>Loading</div>
      ) : (
        <Formik
          initialValues={{
            email: "byron.fields@reqres.in",
            password: "pistol",
          }}
          validationSchema={validationSchema()}
          onSubmit={(values) => {
            props.doAuth({
              ...values,
              isSignUp: false,
            });
          }}
        >
          <Form className="ui form container">
            <h2> Authentication</h2>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <Field className="field" name="email" type="email" />
              <ErrorMessage name="email">
                {(msg) => (
                  <div style={{ color: "red", fontWeight: "bold" }}>{msg}</div>
                )}
              </ErrorMessage>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <Field className="field" name="password" type="password" />
              <ErrorMessage name="password">
                {(msg) => (
                  <div style={{ color: "red", fontWeight: "bold" }}>{msg}</div>
                )}
              </ErrorMessage>
            </div>
            <br />
            <div className="field">
              <button className="ui button" type="submit">
                Sign In
              </button>
            </div>
            <button
              className="ui button"
              type="button"
              onClick={onChangeAuthMode}
            >
              Switch to Sign Up
            </button>
          </Form>
        </Formik>
      )}
      <br />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    submittingForm: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  doAuth: (authData) => dispatch(authActions.authUser(authData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
