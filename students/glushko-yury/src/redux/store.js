import { combineReducers, createStore } from 'redux';
import chatsReducer from './chats-reducer';
import profileReducer from './profile-reducer';

const reducers = combineReducers({
  messenger: chatsReducer,
  profile: profileReducer,
});

const store = createStore(reducers);

export default store;
