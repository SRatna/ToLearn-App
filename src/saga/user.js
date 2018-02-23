/**
 * Created by sushanta on 2/21/18.
 */
import { call, put } from 'redux-saga/effects';
import { registerUserApi, loginUserApi } from '../api';
import { loginOrRegisterUserDone } from '../actions';

export function* loginUser({ email, password }) {
  // console.log(email, password);
  try {
    const authData = yield call(loginUserApi, email, password);
    console.log(authData);
    yield put(loginOrRegisterUserDone(authData));
  } catch (err) {
    console.log(err);
  }
}

export function* registerUser({ email, password }) {
  // console.log(email, password);
  try {
    const authData = yield call(registerUserApi, email, password);
    yield put(loginOrRegisterUserDone(authData));
  } catch (err) {
    console.log(err);
  }
}