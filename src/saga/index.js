/**
 * Created by sushanta on 2/21/18.
 */
import { takeLatest, all } from 'redux-saga/effects';
import { loginUser, registerUser, logOutUser } from './user';

export default function* watcher() {
  yield all([
    takeLatest('LOGIN_USER', loginUser),
    takeLatest('REGISTER_USER', registerUser),
    takeLatest('LOGOUT_USER', logOutUser),
  ]);
}