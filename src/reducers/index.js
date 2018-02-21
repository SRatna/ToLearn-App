/**
 * Created by sushanta on 2/21/18.
 */
import { combineReducers } from 'redux';
import user from './user';

const appReducer = combineReducers({
  user
});

export default appReducer;