import { browserHistory } from 'react-router';
import firebase, { firebaseRef } from '../firebase';

import {
	AUTH_USER,
	AUTH_ERROR,
	SIGN_OUT_USER

} from './types';

export function getFirebaseAuth() {
	return firebase.auth();
}

export function signinUser({ email, password }) {
	return function (dispatch) {
		//submit email/password to server
		getFirebaseAuth().signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authUser());
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error));
      });
	};
}

export function signupUser({ email, password }) {
		return function (dispatch) {
    getFirebaseAuth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authUser());
        browserHistory.push('/');
      })
      .catch(error => {
        console.log(error);
        dispatch(authError(error));
      });
  };
}

export function authUser() {
  return {
    type: AUTH_USER
  };
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function verifyAuth() {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signoutUser());
      }
    });
  };
}

export function signoutUser() {
	return function (dispatch) {
		firebase.auth().signOut()
			.then(() => {
				//browserHistory.push('/');
				dispatch({ type: SIGN_OUT_USER });
			})
			.catch(error => {
				console.log(`error signing out. Detail ${error}`);
			});
		};
}

//TODO: implement firebase CRUD with Actions

// export function fetchMessage() {
// 	return function (dispatch) {
//
// 	};
// }
