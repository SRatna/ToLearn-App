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

export const logOutUserApi = () => {
  firebase.auth().signOut();
};

export const saveToLearnTextApi = (text) => {
  firebase.database().ref('toLearns/').push().set({
    text: text,
    userId: sessionStorage.getItem('userId'),
    email: sessionStorage.getItem('email'),
    voteCount: 0,
    createdAt: Date.now()
  });
};

export const getTopToLearnsApi = () => {
  return firebase.database().ref('toLearns').orderByChild('createdAt').once('value').then(toLearns => {
    let toLearnItems = [];
    toLearns.forEach(toLearn => {
      let item = {...toLearn.val(), key: toLearn.key};
      toLearnItems.push(item);
    });
    return toLearnItems;
  });
};

export const getToLearnsRefApi = () => {
  return firebase.database().ref('toLearns');
};