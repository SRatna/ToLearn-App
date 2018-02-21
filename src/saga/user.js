/**
 * Created by sushanta on 2/21/18.
 */
import { call, put } from 'redux-saga/effects';

export function* loginUser({ email, password }) {
  console.log(email, password);
  try {
  } catch (err) {
    console.log(err);
  }
}

export function* registerUser({ email, password }) {
  // console.log(email, password);
  try {
    const authData = yield call(registerUserApi, email, password);
    // yield put(loginUserDone(authData));
  } catch (err) {
    console.log(err);
  }
}