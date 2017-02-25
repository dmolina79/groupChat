import { browserHistory } from 'react-router';
import firebase, { firebaseRef } from '../firebase';

import {
	AUTH_USER,
	AUTH_ERROR,
	SIGN_OUT_USER,
	GROUP_CREATED
} from './types';

export function getFirebaseAuth() {
	return firebase.auth();
}

export function getFirebaseDb() {
	return firebaseRef;
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
    getFirebaseAuth().onAuthStateChanged(user => {
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
		getFirebaseAuth().signOut()
			.then(() => {
				//browserHistory.push('/');
				dispatch({ type: SIGN_OUT_USER });
			})
			.catch(error => {
				console.log(`error signing out. Detail ${error}`);
			});
		};
}

//firebase DB CRUD Actions

export function createGroup(name) {
	console.log(name);
	return function (dispatch) {
		getFirebaseDb().ref('/groups' + name).set({
			name: 'name'
		})
			.then(() => {
				//browserHistory.push('/');
				dispatch({ type: GROUP_CREATED });
			})
			.catch(error => {
				console.log(`error signing out. Detail ${error}`);
			});
		};
}


// export function fetchMessage() {
// 	return function (dispatch) {
//
// 	};
// }
