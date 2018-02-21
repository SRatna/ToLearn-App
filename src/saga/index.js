/**
 * Created by sushanta on 2/21/18.
 */
import { takeLatest, all } from 'redux-saga/effects';
import { loginUser, registerUser } from './user';

export default function* watcher() {
  yield all([
    takeLatest('LOGIN_USER', loginUser),
    takeLatest('REGISTER_USER', registerUser),
  ]);
}