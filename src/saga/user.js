/**
 * Created by sushanta on 2/21/18.
 */
import { call, put } from 'redux-saga/effects';
import { registerUserApi, loginUserApi, logOutUserApi } from '../api';
import { loginOrRegisterUserDone, toggleLoading } from '../actions';

export function* loginUser({ email, password }) {
  // console.log(email, password);
  try {
    yield put(toggleLoading());
    const authData = yield call(loginUserApi, email, password);
    yield put(loginOrRegisterUserDone(authData));
  } catch (err) {
    yield put(toggleLoading());
    console.log(err);
  }
}

export function* registerUser({ email, password }) {
  // console.log(email, password);
  try {
    yield put(toggleLoading());
    const authData = yield call(registerUserApi, email, password);
    yield put(loginOrRegisterUserDone(authData));
  } catch (err) {
    yield put(toggleLoading());
    console.log(err);
  }
}

export function* logOutUser() {
  try {
    yield call(logOutUserApi);
  } catch (err) {
    console.log(err);
  }
}