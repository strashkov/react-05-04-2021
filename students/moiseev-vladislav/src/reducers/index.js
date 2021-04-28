import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import profileReducer from "./profileReducer";
import headerReducer from "./headerReducer";

export default combineReducers({
  chatReducer,
  profileReducer,
  headerReducer,
});
