import { browserHistory } from 'react-router';
import _ from 'lodash';
import firebase, { firebaseRef } from '../firebase';


import {
	AUTH_USER,
	AUTH_ERROR,
	SIGN_OUT_USER,
	GROUP_CREATED,
	GROUP_FOUND,
	GROUP_NOT_FOUND,
	CHAT_LOADING,
	CHAT_LOADED,
	CHAT_LOAD_FAIL
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
        console.log(error);
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

export function groupFound() {
	return {
		type: GROUP_FOUND
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

//firebase DB CRUD Actions

export function createGroup(name) {
	const { uid } = getFirebaseAuth().currentUser;
	const defaultChannelId = `${name}-default`;
	const commonChannelId = `${name}-common`;
	return function (dispatch) {
		getFirebaseDb().child(`entities/groups/${name}`).set({
			name,
			admin: uid,
			channels: {
				default: {
					name: 'default',
					chatId: defaultChannelId
				},
				common: {
					name: 'common',
					chatId: commonChannelId
				}
			}
		})
		.then((snapshot) => {
				browserHistory.push(`/chatroom/${name}`);
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
		.child('entities/groups')
		.once('value')
		//promise-> then = success | catch = fail
		.then((snapshot) => {
			if (snapshot.hasChild(name)) {
					browserHistory.push(`/chatroom/${name}`);
					dispatch(groupFound());
				} else {
					dispatch({ type: GROUP_NOT_FOUND });
				}
			})
			.catch(error => {
				console.log(`error finding group. Detail ${error}`);
			});
		};
}
//This function should map the Firebase snapshot to
//the groupInfo object and what data we want to load into
//the component
export function groupChatLoaded(groupSnapShot, chatInfo) {
	//our object to store the chatRoom info
	const channels = groupSnapShot.child('channels').val();

	const groupChatInfo = {
		name: groupSnapShot.key,
		channels: _.keys(channels),
		//groupies: ['Douglas', 'Pamela', 'Alex', 'Gabriel']
	};

	return {
		type: CHAT_LOADED,
		payload: { groupChatInfo, chatInfo }
	};
}

export function groupChatLoadFailed(error) {
	return {
		type: CHAT_LOAD_FAIL,
		payload: error
	};
}

export function fetchGroupChatInfo(name) {
	const groupChat = `entities/groups/${name}`;
	console.log(groupChat);

	return function (dispatch) {
		dispatch({ type: CHAT_LOADING });

		getFirebaseDb()
		.child(groupChat)
		.once('value')
		.then((snapshot) => {
				dispatch(groupChatLoaded(snapshot, { name: 'default' }));
			})
			.catch(error => {
				console.log(`Could not load group. Detail ${error}`);
				dispatch(groupChatLoadFailed(error));
			});
		};
}
