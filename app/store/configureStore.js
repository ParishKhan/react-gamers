import { createStore, combineReducers } from 'redux';
import { commentReducer, infoReducer } from 'reducers/reducers';
import { composeWithDevTools } from "redux-devtools-extension";

export const configure = (initialState = {}) => {
  var reducer = combineReducers({
  });

  var store = createStore(reducer, initialState, composeWithDevTools())

  return store;
}