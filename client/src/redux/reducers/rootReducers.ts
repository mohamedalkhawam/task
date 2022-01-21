import { combineReducers } from "redux";
import usersReducer from "./users";
import alertReducer from "./alert";
import appReducer from "./app";
export default combineReducers({
  usersReducer,
  alertReducer,
  appReducer,
});
