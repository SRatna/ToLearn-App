/**
 * Created by sushanta on 2/21/18.
 */
import { takeLatest, all } from 'redux-saga/effects';
import { loginUser, registerUser, logOutUser } from './user';
import { saveToLearnText, voteToLearn } from './toLearn';

export default function* watcher() {
  yield all([
    takeLatest('LOGIN_USER', loginUser),
    takeLatest('REGISTER_USER', registerUser),
    takeLatest('LOGOUT_USER', logOutUser),
    takeLatest('SAVE_TO_LEARN_TEXT', saveToLearnText),
    takeLatest('VOTE_TO_LEARN', voteToLearn)
  ]);
}