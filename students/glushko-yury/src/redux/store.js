import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import chatsReducer from './chats-reducer';
import profileReducer from './profile-reducer';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'geekmessanger',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['messenger'],
};

const reducers = combineReducers({
  router: connectRouter(history),
  messenger: chatsReducer,
  profile: profileReducer,
});

const store = createStore(
  persistReducer(persistConfig, reducers),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export const persistor = persistStore(store);

export default store;
