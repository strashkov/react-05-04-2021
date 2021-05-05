import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import answersReducer from "./answersReducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    chatReducer,
    messageReducer,
    profileReducer,
    answersReducer,
  });
