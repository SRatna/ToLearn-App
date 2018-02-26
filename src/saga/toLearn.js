/**
 * Created by sushanta on 2/23/18.
 */
import { call } from 'redux-saga/effects';
import { saveToLearnTextApi, getTopToLearnsApi } from '../api';

export function* saveToLearnText({ text }) {
  try {
    yield call(saveToLearnTextApi, text);
  } catch (err) {
    console.log(err);
  }
}

export function* getTopToLearns() {
  try {
    yield call(getTopToLearnsApi);
  } catch (err) {
    console.log(err);
  }
}