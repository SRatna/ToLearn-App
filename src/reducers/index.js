/**
 * Created by sushanta on 2/21/18.
 */
import { combineReducers } from 'redux';
import user from './user';
import toLearn from './toLearn';

const appReducer = combineReducers({
  user, toLearn
});

export default appReducer;