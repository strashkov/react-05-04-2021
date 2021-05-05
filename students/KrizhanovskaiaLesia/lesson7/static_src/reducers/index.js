import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import { connectRouter } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist';


export default (history) => combineReducers({
  router: connectRouter(history),
  chatReducer,
  messageReducer,
  profileReducer,
});
