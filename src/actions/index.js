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

function createGroupData(name) {
	const { uid } = getFirebaseAuth().currentUser;
	const defaultChannelId = `${name}-default`;
	const commonChannelId = `${name}-common`;

	const groupData = {
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
	};

	return groupData;
}

function createChatData(name) {
	const defaultChannelId = `${name}-default`;
	const commonChannelId = `${name}-common`;
	const timeStamp = Date.now();
	const chatData = {
		[defaultChannelId]: {
			[timeStamp]: {
				name: 'chat-bot',
				dateTime: timeStamp,
				text: 'Welcome to Group Chat!'
			}
		},
		[commonChannelId]: {
			[timeStamp]: {
				name: 'chat-bot',
				dateTime: timeStamp,
				text: 'Welcome to the Common chat room!'
			}
		}
	};

	return chatData;
}
//firebase DB CRUD Actions

export function createGroup(name) {
	return function (dispatch) {
		const createGroupPromise = getFirebaseDb()
																.child(`entities/groups/${name}`)
																.set(createGroupData(name));
		const createChatPromise = getFirebaseDb()
																.child('entities/chats')
																.update(createChatData(name));

		Promise.all([createGroupPromise, createChatPromise])
			.then((results) => {
					browserHistory.push(`/chatroom/${name}`);
					dispatch({ type: GROUP_CREATED,
										payload: results[0]
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
export function groupChatLoaded(groupSnapShot, chatSnapShot) {
	//our object to store the chatRoom info
	const channels = groupSnapShot.child('channels').val();
	const chatMsgs = chatSnapShot.val();

	const groupChatInfo = {
		name: groupSnapShot.key,
		channels: _.keys(channels),
		selectedChannel: 'default',
		//groupies: ['Douglas', 'Pamela', 'Alex', 'Gabriel']
	};

	const chatInfo = {
		messages: _.values(chatMsgs)
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
	const groupChatInfo = `entities/groups/${name}`;
	const groupChatId = `entities/chats/${name}-default`;

	return function (dispatch) {
		dispatch({ type: CHAT_LOADING });

		const groupChatInfoPromise = getFirebaseDb()
																	.child(groupChatInfo)
																	.once('value');
    const chatIdPromise = 	getFirebaseDb()
																	.child(groupChatId)
																	.once('value');

  Promise.all([groupChatInfoPromise, chatIdPromise])
		.then((results) => {
				dispatch(groupChatLoaded(results[0], results[1]));
			})
			.catch(error => {
				console.log(`Could not load group. Detail ${error}`);
				dispatch(groupChatLoadFailed(error));
			});
		};
}
