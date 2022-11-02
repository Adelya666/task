import "./App.css";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Private from "./routing/Private/Private";
import Public from "./routing/Public/Public";
import { connect } from "react-redux";
import * as authActions from "./actions/auth";

const App = (props) => {
  useEffect(() => {
    if (!props.isAuthenticated) {
      props.autoSignup();
    }
  }, [props]);

  return (
    <Container>{props.isAuthenticated ? <Private /> : <Public />}</Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoSignup: () => dispatch(authActions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
