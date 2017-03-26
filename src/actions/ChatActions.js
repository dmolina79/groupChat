//import { browserHistory } from 'react-router';
import _ from 'lodash';
import { firebaseRef } from '../firebase';

import {
	CHAT_LOADING,
	CHAT_LOADED,
	CHAT_LOAD_FAIL,
	POST_MSG,
	POST_MSG_FAIL,
	POST_MSG_LOADING
} from './types';

function getFirebaseDb() {
	return firebaseRef;
}

export function postMessage(message, chatId) {
	const timeStamp = Date.now();
	const msg = { ...message, dateTime: timeStamp };
	return function (dispatch) {
		getFirebaseDb()
			.child(`entities/chats/${chatId}/${timeStamp}`)
			.set(msg)
			.then(() => {
					dispatch({ type: POST_MSG, payload: msg });
				})
				.catch(error => {
					console.log('Error posting message to chat. ', error);
					dispatch({ type: POST_MSG_FAIL, payload: error });
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
