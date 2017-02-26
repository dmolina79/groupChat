import { browserHistory } from 'react-router';
import firebase, { firebaseRef } from '../firebase';

import {
	AUTH_USER,
	AUTH_ERROR,
	SIGN_OUT_USER,
	GROUP_CREATED,
	GROUP_FOUND,
	GROUP_NOT_FOUND
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
	const uid = getFirebaseAuth().currentUser.uid;
	return function (dispatch) {
		getFirebaseDb().child(`groups/${name}`).set({
			name,
			admin: uid
		})
		.then((snapshot) => {
				browserHistory.push(`/chatroom?group=${name}`);
				dispatch({ type: GROUP_CREATED,
									payload: snapshot
								});
			})
			.catch(error => {
				console.log(`error creating group. Detail ${error}`);
			});
		};
}

export function findGroupChat(name) {
	return function (dispatch) {
		getFirebaseDb()
		.child('groups')
		.once('value')
		.then((snapshot) => {
			if (snapshot.hasChild(name)) {
					browserHistory.push(`/chatroom?group=${name}`);
					dispatch({ type: GROUP_FOUND });
				} else {
					dispatch({ type: GROUP_NOT_FOUND });
				}
			})
			.catch(error => {
				console.log(`error finding group. Detail ${error}`);
			});
		};
}


// export function fetchMessage() {
// 	return function (dispatch) {
//
// 	};
// }
