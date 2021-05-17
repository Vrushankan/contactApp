import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);
