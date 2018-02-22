/**
 * Created by sushanta on 2/21/18.
 */
import * as firebase from 'firebase';
import config from './firebaseConfig';

export const initializeFirebase = () => {
  firebase.initializeApp(config);
};

export const registerUserApi = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};