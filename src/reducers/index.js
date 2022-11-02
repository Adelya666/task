import usersReducer from "./users";
import authReducer from "./auth";
import { combineReducers } from "redux";

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
});
