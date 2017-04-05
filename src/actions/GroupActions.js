import { browserHistory } from 'react-router';
import firebase, { firebaseRef } from '../firebase';

import {
	GROUP_CREATED,
	GROUP_FOUND,
	GROUP_NOT_FOUND
} from './types';

function getFirebaseAuth() {
	return firebase.auth();
}

function getFirebaseDb() {
	return firebaseRef;
}

export function groupFound() {
	return {
		type: GROUP_FOUND
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
				username: 'chat-bot',
				dateTime: timeStamp,
				message: 'Welcome to Group Chat!'
			}
		},
		[commonChannelId]: {
			[timeStamp]: {
				username: 'chat-bot',
				dateTime: timeStamp,
				message: 'Welcome to the Common chat room!'
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
					browserHistory.push(`/chatroom/${name}/default`);
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
					browserHistory.push(`/chatroom/${name}/default`);
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
