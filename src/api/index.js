/**
 * Created by sushanta on 2/21/18.
 */
import * as firebase from 'firebase';
import config from './firebaseConfig';

export const initializeFirebase = () => {
  firebase.initializeApp(config);
};

export const registerUserApi = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      return {
        success: true,
        id: user.uid,
        email: user.email
      }
    }, error => {
      let errorMessage = error.message;
      return {
        success: false,
        errorMessage
      }
    });
};

export const loginUserApi = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      return {
        success: true,
        id: user.uid,
        email: user.email
      }
    }, error => {
      let errorMessage = error.message;
      return {
        success: false,
        errorMessage
      }
    });
};
