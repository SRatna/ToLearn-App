/**
 * Created by sushanta on 2/23/18.
 */
import { call } from 'redux-saga/effects';
import { saveToLearnTextApi, voteToLearnApi } from '../api';

export function* saveToLearnText({ text }) {
  try {
    yield call(saveToLearnTextApi, text);
  } catch (err) {
    console.log(err);
  }
}

export function* voteToLearn({ key, alreadyVoted }) {
  try {
    yield call(voteToLearnApi, key, alreadyVoted);
  } catch (err) {
    console.log(err);
  }
}
