import {combineReducers} from 'redux';
// import { routerReducer as routing } from 'react-router-redux';
import {fetchUser, setActiveUser, deleteUser} from './user/fetchUser';

const rootReducer = combineReducers({
  fetchUser,
  setActiveUser,
  deleteUser,
});

export default rootReducer;
