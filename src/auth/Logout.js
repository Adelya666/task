import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as authActions from "../actions/auth";
import { Navigate } from "react-router-dom";

const Logout = (props) => {
  useEffect(() => {
    props.doLogout();
  }, [props]);

  return <Navigate to="/signin" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => dispatch(authActions.authLogout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
