import {combineReducers} from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
import {fetchUser, setActiveUser} from './user/fetchUser';

const rootReducer = combineReducers({
  fetchUser,
  setActiveUser,
});

export default rootReducer;
