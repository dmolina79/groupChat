import { browserHistory } from 'react-router';
import firebase from '../firebase';
import {
	AUTH_USER,
	AUTH_ERROR,
	SIGN_OUT_USER
} from './types';

function getFirebaseAuth() {
	return firebase.auth();
}

export function signinUser({ email, password }) {
	return function (dispatch) {
		//submit email/password to server
		getFirebaseAuth().signInWithEmailAndPassword(email, password)
   // ==PROMISE
      .then((user) => {
        dispatch(authUser({ email: user.email }));


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
      .then((user) => {
        dispatch(authUser({ email: user.email }));
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}

export function authUser(user) {
  return {
    type: AUTH_USER,
		payload: user
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
        dispatch(authUser({ email: user.email }));
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
